---
layout: single
title: " "
permalink: /projects/
author_profile: true
---

<h1 class="fancy-title">Projects</h1>

<div class="hero-block">
  <p class="hero-block__text">A curated selection of research and engineering projects spanning AI, full-stack development, and mobile applications.</p>
</div>

## AI & Research

<div class="project-grid">
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-satellite-dish" aria-hidden="true"></i></div>
    <h3>ResearchRadar</h3>
    <p>An ArXiv intelligence tool that goes beyond listing papers. Automatically tracks multi-week citation trends, clusters papers into topic maps, and answers research questions via local RAG. Supports Ollama, DeepSeek, and OpenAI. All data stored locally.</p>
    <div class="project-card__meta">
      <span>Python</span>
      <span>TypeScript</span>
      <span>FastAPI</span>
      <span>RAG</span>
      <span>React</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/research-radar" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
    <h3>G-CoS</h3>
    <p>Research code for <em>G-CoS: An Interpretable Gain-Cost Framework for User Satisfaction Estimation in Generative Information Retrieval</em>, published as a short paper at SIGIR 2026 (pp. 4110–4115).</p>
    <div class="project-card__meta">
      <span>Python</span>
      <span>IR</span>
      <span>LLM</span>
      <span>Evaluation</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/Academic-Hammer/G-CoS" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://doi.org/10.1145/3805712.3809934" target="_blank"><i class="fas fa-book-open"></i> Paper (ACM DL)</a>
      <a href="https://openreview.net/forum?id=K0wp4SqUag" target="_blank"><i class="fas fa-file-alt"></i> OpenReview</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-comments" aria-hidden="true"></i></div>
    <h3>ReviewLLM</h3>
    <p>End-to-end pipeline for automatic academic peer review generation. Integrates retrieval-augmented prompts, reviewer persona conditioning, and rubric-aligned scoring to boost review helpfulness.</p>
    <div class="project-card__meta">
      <span>Python</span>
      <span>LLM</span>
      <span>NLP</span>
      <span>RAG</span>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-video" aria-hidden="true"></i></div>
    <h3>DaGAN Talking Face Reproduction</h3>
    <p>Reproduced the CVPR 2022 paper <em>Depth-Aware GAN for Talking Head Video Generation</em>. Trained on 4× RTX 4090 GPUs and evaluated with PSNR, SSIM, FID, LSE-C and LSE-D metrics. Fully Dockerized.</p>
    <div class="project-card__meta">
      <span>Python</span>
      <span>PyTorch</span>
      <span>GAN</span>
      <span>Docker</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/talkingface-kit" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</div>

## Full-Stack Applications

<div class="project-grid">
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-book" aria-hidden="true"></i></div>
    <h3>心迹 · Diary</h3>
    <p>A privacy-focused personal diary web app with rich-text editing, mood tracking, tag classification, calendar check-in, and writing statistics. Supports Docker deployment and data export.</p>
    <div class="project-card__meta">
      <span>React</span>
      <span>Node.js</span>
      <span>PostgreSQL</span>
      <span>Docker</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/diary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-heartbeat" aria-hidden="true"></i></div>
    <h3>Healthcare Platform <span style="font-size:0.75em;opacity:0.7">(v2)</span></h3>
    <p>Upgraded full-stack health management system. Features appointment scheduling, health data tracking, medication reminders, community forum, and real-time WebSocket notifications. AI consultation via ERNIE Bot API.</p>
    <div class="project-card__meta">
      <span>Flutter</span>
      <span>Vue.js</span>
      <span>Spring Boot</span>
      <span>Redis</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/Healthcare-APP" target="_blank"><i class="fab fa-github"></i> Mobile App</a>
      <a href="https://github.com/nova728/health-platform-front" target="_blank"><i class="fab fa-github"></i> Frontend</a>
      <a href="https://github.com/nova728/health-platform-backend" target="_blank"><i class="fab fa-github"></i> Backend</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-heartbeat" aria-hidden="true"></i></div>
    <h3>Healthcare Platform <span style="font-size:0.75em;opacity:0.7">(v1)</span></h3>
    <p>First-generation health management platform built with Spring Boot and Vue.js. Provides health records, exercise tracking, diet management, drug lookup (OpenFDA), and food nutrition data (FatSecret API).</p>
    <div class="project-card__meta">
      <span>Java</span>
      <span>Vue.js</span>
      <span>Spring Boot</span>
      <span>MySQL</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/healthplatform" target="_blank"><i class="fab fa-github"></i> Backend</a>
      <a href="https://github.com/nova728/healthplatform_front" target="_blank"><i class="fab fa-github"></i> Frontend</a>
    </div>
  </div>
</div>

## Mobile Applications

<div class="project-grid">
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
    <h3>高考志愿填报建议系统</h3>
    <p>A Flutter mobile app that helps Chinese high school students select universities. Integrates college search, admission score history, AI-powered recommendation, and personalized score management.</p>
    <div class="project-card__meta">
      <span>Flutter</span>
      <span>Dart</span>
      <span>JWT</span>
      <span>REST API</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/edu_flutter_app" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</div>

## What I am Looking For

<div class="callout">
  <p><i class="fas fa-heart icon" aria-hidden="true"></i> I am eager to collaborate on projects that push LLM evaluation forward, especially around peer review and agent design. Feel free to reach out to explore ideas together.</p>
</div>
