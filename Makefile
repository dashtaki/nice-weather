.PHONY: lint test setup setup-dev ping scan

# Default target when just running 'make'
all: lint

# Install runtime dependencies only
setup:
	@echo "Installing runtime dependencies..."
	pip install -r requirements.txt

# Install all dependencies including testing tools
setup-dev:
	@echo "Installing development/testing dependencies..."
	pip install -r test-requirements.txt

# Run ansible-lint on the codebase
lint:
	@echo "Running Ansible Lint..."
	ansible-lint --force-color || (echo "❌ Ansible Lint found issues. Please fix them before committing." && exit 1)
	@echo "✅ Ansible Lint passed!"

# Test task - can be expanded to include other tests beyond linting
test: lint

# Ping all hosts in the inventory to check connectivity
ping:
	@echo "Pinging all hosts in inventory..."
	ANSIBLE_HOST_KEY_CHECKING=False ansible all -i inventory.yml -m ping

# Run security scan on all hosts
scan:
	@echo "Running security scan on all hosts..."
	ansible-inventory -i inventory.yml --list | cnspec scan --inventory-file - --inventory-format-ansible

# Help text
help:
	@echo "Available targets:"
	@echo "  make setup        - Install runtime dependencies only"
	@echo "  make setup-dev    - Install all dependencies including testing tools"
	@echo "  make lint         - Run ansible-lint to check code quality"
	@echo "  make test         - Run all tests (lint)"
	@echo "  make ping         - Ping all hosts in the inventory to check connectivity"
	@echo "  make scan         - Run security scan on all inventory hosts"
	@echo "  make help         - Show this help message"
