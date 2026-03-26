# 🚀 CloudNative-ThreeTier-Ecosystem: Enterprise-Grade Commerce Solution

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.1.1-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-2.2.1-purple?style=flat-square&logo=redux)](https://redux.js.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**CloudNative-ThreeTier-Ecosystem** is a production-ready, highly-available e-commerce platform designed with a strict **Three-Tier Architecture**. This project serves as an end-to-end engineering showcase, integrating a high-performance Next.js 14 frontend with a Cloud-Native DevOps pipeline utilizing AWS EKS, Terraform, Ansible, and GitOps workflows via ArgoCD.

> Live Demo: [https://cloudnative-threetier-ecosystem.netlify.app/](https://cloudnative-threetier-ecosystem.netlify.app/)

> ![Nexus-Scale-Commerce](./docs/assets/01-easyshop-ui.png)
> ![Nexus-Scale-Commerce](./docs/assets/02-easyshop-ui.png)

## ✨ Features

- 🎨 Modern and responsive UI with dark mode support
- 🔐 Secure JWT-based authentication
- 🛒 Real-time cart management with Redux
- 📱 Mobile-first design approach
- 🔍 Advanced product search and filtering
- 💳 Secure checkout process
- 📦 Multiple product categories
- 👤 User profiles and order history
- 🌙 Dark/Light theme support

## 🏗️ System Architecture: Production-Grade Three-Tier Pattern

> ![Architecture](./docs/assets/easyshop-architecture.png)
>
> ![Nexus-Scale-Commerce-Shop](./docs/assets/tws-e-commerce-shop.png)

This project is built following the **Three-Tier Architecture** pattern, a standard for enterprise-level applications to ensure modularity, scalability, and security.

### 🖥️ 1. Presentation Tier (User Interface)
The frontend is a high-performance, responsive single-page application (SPA) built with **Next.js 14** and **React**.
- **State Management:** Redux Toolkit for robust, global state control.
- **Styling:** Tailwind CSS for a modern, utility-first UI.
- **User Experience:** Implements dark mode, client-side routing, and real-time UI updates.

### ⚙️ 2. Application Tier (Business Logic)
This middle layer handles the core functionality and acts as a bridge between the user interface and the database.
- **API Layer:** Next.js API Routes serving as a decoupled backend.
- **Security:** Secure JWT-based authentication and authorization middleware.
- **Operations:** Logic for product filtering, cart calculations, and order management.
- **Resilience:** Comprehensive error handling and request validation.

### 🗄️ 3. Data Tier (Persistence)
The persistence layer ensures that data is stored securely and can be retrieved efficiently.
- **Database:** MongoDB, providing a flexible and scalable NoSQL schema.
- **Data Modeling:** Mongoose ODM for type-safe interactions and schema enforcement.
- **Integrity:** Strict data validation at the database level to ensure consistency.

## PreRequisites

> [!IMPORTANT]  
> Before you begin setting up this project, make sure the following tools are installed and configured properly on your system:

## Setup & Initialization <br/>

### 1. Install Terraform

1. Terraform Installation
  ```bash
  curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
  sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
  sudo apt-get update && sudo apt-get install terraform
  ```

2. Verify Installation
  ```bash
  terraform --version
  ```

### 2. Install AWS CLI
AWS CLI (Command Line Interface) allows you to interact with AWS services directly from the command line.

  ```bash
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  sudo apt install unzip
  unzip awscliv2.zip
  sudo ./aws/install
  ```

  ```aws configure```

This will prompt up to enter:
- **AWS Access Key ID:**<br/>
- **AWS Secret Access Key:**<br/>
- **Default region name:**<br/>
- **Default output format:**<br/>

> [!NOTE] 
>
> Save it because you will later need it
> 
> Make sure the IAM user you're using has the necessary permissions. You’ll need an AWS IAM Role with programmatic access enabled, along with the Access Key and Secret Key.

### 3. Install Ansible

  ```bash
  sudo apt update && sudo apt upgrade -y
  sudo apt install software-properties-common

  sudo add-apt-repository --yes --update ppa:ansible/ansible

  sudo apt install ansible -y

  ansible ---version
  ```

## Getting Started

**Repository Cloning**
```bash
git clone https://github.com/AMANPUSHP23/CloudNative-ThreeTier-Ecosystem.git
```

---

### Terraform Starter

1. Go to the Terraform Folder
```bash
cd terraform/
```

2. Generate Keys for Instances
```bash
mkdir keys
cd keys
ssh-keygen -t rsa -r 2048 -f bastion_key
```

3. Create Plan for Infrastructure as Code
```bash
terraform plan
```

4. Provisioning Cloud Infrastructure
```bash
terraform apply
```

> [!NOTE]
> A dialog box will apprear you may enter `yes` to provision your cloud resources.
>
> It may take up to 20 minutes to create bunch of Cloud Resources

---

### Ansible Configuration

1. Get on Ansible Directory
```bash
cd ansible
```

> [!CAUTION]
> Make sure you have installed `Python3` and installed the packages. If not then follow this
>
> ```bash
> sudo apt update -y
> sudo apt install python3
> ```
>
> Confirm the Installation
>
> ```bash
> python3 --version
> ```

2. Install Required Packages
```bash
pip install -r requirements.txt
```

3. Run the Python file
```bash
python3 main.py
```

- Cross Verification
```bash
cat inventory.ini
```
Check if this IP matches to your DevOps-Bastion Server in AWS

> [!NOTE]
>
> This Python file will connect to your AWS Account and fetch the Bastion Server IP Address which you created through Terraform along with Keys and Python Resources. 
>
> You may check the Python File for Labels and Region

4. Ansible Playbooks
```bash
ansible-playbook -i inventory.ini playbook.yml
```

> Watch the `Ansible Magic Steps`

It will install all the required packages and completly setup you Bastion Server.

> [!TIP]
>
> Watch the steps closely and you will see your Instance IP, Jenkins Initial Password, and much more...

---

### Bastion Server

Fetch your `DevOps-Bastion` Server IP Address from AWS Cloud Console and Copy it

- Get into your Server
```bash
ssh -i terraform/keys/bastion_key ubuntu@`IP ADDRESS`
```

In a few seconds you will be inside your server.

Once you are in it, read the instructions

```bash
cat welcome.txt
```

> [!TIP]
>
> You will now have all the Packages Installed and Jenkins Server Ready through Ansible

> [!CAUTION]
>
> Instance Prerequsites
>
> - Install AWS CLI
> - Publish AWS Credentials
> 
> ```bash
> aws configure
> ```

- Connect to EKS (Elastic Kubernetes Service)
```bash
aws eks update-kubeconfig --region us-east-2 --name nexus-commerce-cluster
```

It depends on you cluster name and region

- Connection Check
```bash
kubectl get nodes
```

Hopefully, you will be ready for the EasyShop Application Deployment

---

### Jenkins CI/CD Piepline

- Access Jenkins
- Plugins
- Integreation
- Credentials
- Packages Setup
- Shared Library
- Running Jenkins Pipeline

> [!IMPORTANT] 
>
> You can check it here [**Jenkins CI/CD Pipeline**](/docs/jenkins.md)

---

### Pre-Deployment Steps

Applying:
- **Kubernetes Ingress Nginx**
- **Cert Manager Kubernetes**

> [!IMPORTANT] 
>
> You can check it here [**Pre-Deployment Steps**](/docs/pre-deployment.md)

### Continous Deployment - CD

- ArgoCD Setup
- Application Deployment

> [!IMPORTANT] 
>
> You can check it here [**Continous Deployment - CD**](/docs/deployment.md)

### Domain Mapping

1. Get the DNS Record from your LoadBalancer
```bash
kubectl get svc ingress-nginx-controller -n ingress-nginx -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

2. Add a CNAME Record in your domain (e.g., `shop.yourdomain.com`) and add the DNS Record you just got.

### HTTPS Check

- Check file to see whether you have Domain Mapped Correctly
* 00-cluster-issuer.yaml
* 04-configmap.yaml
* 10-ingress.yaml

- Check their Mapping and Change if needed.

### Monitoring

1. Add the Prometheus Helm repository
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

2. Install Prometheus and Grafana stack
```bash
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

3. Port-forward to access Prometheus UI
```bash
kubectl port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090 -n monitoring
```
Access at: http://IP-ADDRESS:9090

4. Port-forward to access Grafana UI
```bash
kubectl port-forward svc/monitoring-grafana 3000:80 -n monitoring
```
Access at: http://IP-ADDRESS:3000
- Default username: `admin`
- Default password: `prom-operator`

> [!TIP]
> Grafana comes with pre-configured dashboards for Kubernetes monitoring

## **Congratulations!** <br/>
!Nexus-Scale-Commerce Website Screenshot

### Your project is now deployed.
