---
title: 'Unified Collaboration Platform with SSO'
subtitle: 'Internal Platform · SSO'
description: 'Designed, built and operate a container-based collaboration platform that puts customer support, docs, code review and file delivery behind a single SSO account.'
period: 'Oct 2026 — Nov 2026'
kind: 'Company project · Design / build / operate'
order: 4
cover: '/projects/sso-collab-platform/architecture.svg'
coverAlt: 'Five services behind Nginx and authentik SSO'
tags: ['authentik', 'SSO', 'LDAP', 'Redmine', 'XWiki', 'Gerrit', 'SFTPGo', 'FastAPI', 'Nginx', 'Docker']
metrics:
  - { value: '5 services', label: 'Behind one SSO account' }
  - { value: '3 integrations', label: 'Built in-house' }
---

## Overview

![Platform architecture — five services behind Nginx and authentik SSO](/projects/sso-collab-platform/architecture.svg)
*Users and customers reach every service through one HTTPS entry point and one account.*

Customer support, technical docs, code review and file delivery used to live in separate tools with separate accounts. I put them on one container-based platform with a single login.

## What I did

- Built **5 services** with Docker — Redmine (support center), XWiki (docs), Gerrit for development and for customer releases, and SFTPGo (file delivery)
- Unified accounts and login with **authentik SSO**, and wrote an **LDAP outpost + auth hook** so SFTP logins use the same SSO accounts
- Wrote a **FastAPI sync service** that mirrors Jira Cloud issues, comments and attachments into the support center
- Set up HTTPS, domains and IP access control with Nginx Proxy Manager, and automated welcome emails for new accounts

## Results

- Support, docs, code review and file delivery — **5 services under one SSO account**
- **3 integrations** built in-house: SFTP SSO auth hook, Jira → support center sync, account onboarding mail
