# Automated Patching with Mondoo and Ansible

This repository provides a complete solution for automating system patches and security scanning across multiple environments using Ansible and Mondoo's cnspec. The automation helps ensure your systems remain up-to-date, secure, and compliant with minimal manual intervention.

## Overview

The Ansible Patching Role is designed to streamline the process of managing system updates and patches across a variety of environments. Whether you're handling servers in development, staging, or production, this role ensures a consistent, efficient, and secure patching process.

A quick demo video: [Automated patching with Mondoo and Ansible](https://www.loom.com/share/2056f55f48f342a984f83b47f238aafe?sid=535a3c9d-4ef4-43c7-92f9-7d3a309c3dde)

## Key Features

- **Cross-Platform Support**: Works with Linux distributions (e.g., RHEL, Ubuntu, CentOS) and Windows systems.
- **Automated Workflows**: Handles tasks like checking for available updates, installing critical security patches, and rebooting systems if necessary.
- **Customizable Configurations**: Allows flexibility in defining update schedules, excluded packages, and more.
- **Error Handling & Logging**: Provides detailed reports on patching success or failure, ensuring visibility and accountability.
- **Security Compliance**: Ensures your systems remain up-to-date with the latest security updates, reducing vulnerabilities and meeting compliance standards.
- **Integrated Security Scanning**: Uses Mondoo's cnspec to scan systems and identify security vulnerabilities and misconfigurations.

## Security Scanning with cnspec

This project integrates Mondoo's cnspec for comprehensive security scanning of your infrastructure:

- **Automated Security Scans**: Scheduled weekly scans of your entire inventory
- **Inventory-Based Scanning**: Uses your Ansible inventory to scan all managed hosts
- **GitHub Actions Integration**: Automated scans running in CI/CD pipelines
- **Mondoo Platform Integration**: Configure with your Mondoo account for enhanced security analytics

### Setting up GitHub Actions Integration

1. Create a Mondoo account at [mondoo.com](https://mondoo.com)
2. Generate a base64-encoded service account token and set it as a GitHub secret named `MONDOO_CONFIG_BASE64`
3. Set up an SSH key as a GitHub secret named `SSH_KEY` that has access to all your inventory hosts
4. The GitHub Actions workflows will use these secrets for authentication and security scanning

## Getting Started

### Prerequisites

- Ansible (latest version recommended)
- Python 3.11 or later
- SSH access to target machines
- Mondoo cnspec (for security scanning)
- SSH key pair for authenticating with remote systems (same key as in GitHub secrets for CI/CD)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   make setup
   ```
3. Update `inventory.yml` with your target hosts

### Usage

#### Local SSH Setup

Before running commands locally, ensure your SSH configuration is properly set up:

1. Make sure your SSH key is added to the SSH agent:
   ```bash
   ssh-add ~/.ssh/your_private_key
   ```

2. Alternatively, specify the key explicitly in your commands:
   ```bash
   ANSIBLE_SSH_PRIVATE_KEY_FILE=~/.ssh/your_private_key ansible-playbook ...
   ```

#### Make Commands

The project includes several make targets to simplify common operations:

```
make setup        - Install required dependencies
make setup-dev    - Install all dependencies including testing tools
make lint         - Run ansible-lint to check code quality
make test         - Run all tests (lint)
make ping         - Ping all hosts in the inventory to check connectivity
make scan         - Run security scan on all inventory hosts
make help         - Show this help message
```

## GitHub Actions Workflows

This repository includes automated workflows:

1. **cnspec-scan**: Scans your infrastructure using Mondoo cnspec based on your Ansible inventory
2. **ansible-ping**: Verifies connectivity to all hosts in your inventory
3. **apply-patches**: Applies patches to systems based on configured patch windows

### Required GitHub Secrets

To run these workflows, you need to set up the following GitHub secrets:

| Secret Name | Description |
|-------------|-------------|
| `SSH_USERNAME` | Set the default username which will be used to connect.  Inventory file takes precedent |
| `SSH_KEY` | Private SSH key in PEM format that has access to all hosts in your inventory |
| `MONDOO_CONFIG_BASE64` | Base64-encoded Mondoo service account configuration |

To set up these secrets:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Add each secret with its appropriate value

## Role Purpose

This role simplifies the patching process for system administrators by automating repetitive tasks, minimizing downtime, and maintaining system consistency. It's ideal for environments requiring scalable and reliable update management while ensuring minimal manual intervention.
