---
permalink: /
title: " "
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<h1 class="fancy-title">About Me</h1>

<div class="intro-panel">
  <p class="about-intro">
    I am an M.S. student in Computer Science &amp; Technology at
    <strong>Beijing Institute of Technology</strong>, where I also completed my B.S. My research asks a
    simple question in a hard setting: <em>when a system generates an answer instead of returning a list
    of documents, how do we know whether it was any good?</em> That leads me to
    <strong>evaluation for generative retrieval</strong> and
    <strong>research evaluation for scientific peer review</strong>.
  </p>
  <div class="intro-panel__links">
    <a class="pub-link pub-link--primary" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
    <a class="pub-link" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
    <a class="pub-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
    <a class="pub-link" href="{{ site.author.orcid }}" target="_blank" rel="noopener"><i class="ai ai-orcid" aria-hidden="true"></i> ORCID</a>
    <a class="pub-link" href="/cv/"><i class="fas fa-file-lines" aria-hidden="true"></i> CV</a>
  </div>
</div>

## News

<ul class="news-list">
  <li class="news-item">
    <span class="news-item__date">Jul 2026</span>
    <span class="news-item__text">
      <span class="news-item__tag news-item__tag--live">Published</span>
      <em>G-CoS</em> appears in the <strong>SIGIR '26</strong> proceedings (pp. 4110–4115, Melbourne,
      Australia) and is now live in the ACM Digital Library —
      <a href="https://doi.org/10.1145/3805712.3809934" target="_blank" rel="noopener">10.1145/3805712.3809934</a>.
    </span>
  </li>
  <li class="news-item">
    <span class="news-item__date">Jun 2026</span>
    <span class="news-item__text">
      <span class="news-item__tag">Milestone</span>
      Graduated with a B.S. in Computer Science &amp; Technology from Beijing Institute of Technology,
      and staying at BIT to begin an M.S. in the same field (2026–2029).
    </span>
  </li>
  <li class="news-item">
    <span class="news-item__date">Apr 2026</span>
    <span class="news-item__text">
      <span class="news-item__tag">Accepted</span>
      <em>G-CoS: An Interpretable Gain-Cost Framework for User Satisfaction Estimation in Generative
      Information Retrieval</em> was accepted to the SIGIR 2026 short paper track.
    </span>
  </li>
</ul>

## Publications

<div class="pub-list">
  {% assign home_pubs = site.publications | sort: "date" | reverse %}
  {% for post in home_pubs %}
  <article class="pub-card">
    <div class="pub-card__year">
      <span>{{ post.date | date: "%Y" }}</span>
      <span class="pub-card__month">{{ post.date | date: "%b" }}</span>
    </div>
    <div class="pub-card__body">
      <h3 class="pub-card__title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.authors %}<p class="pub-card__authors">{{ post.authors }}</p>{% endif %}
      <p class="pub-card__venue"><i class="fas fa-map-pin" aria-hidden="true"></i> {{ post.venue }}</p>
      <div class="pub-detail__links">
        {% if post.doi %}<a class="pub-link pub-link--primary" href="https://doi.org/{{ post.doi }}" target="_blank" rel="noopener"><i class="fas fa-book-open" aria-hidden="true"></i> DOI</a>{% endif %}
        {% if post.codeurl %}<a class="pub-link" href="{{ post.codeurl }}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Code</a>{% endif %}
        <a class="pub-link" href="{{ post.url }}"><i class="fas fa-quote-right" aria-hidden="true"></i> Details &amp; BibTeX</a>
      </div>
    </div>
  </article>
  {% endfor %}
</div>

## Snapshot

<div class="info-grid snapshot-grid">
  <div class="info-card">
    <div class="info-card__header">
      <div class="info-card__icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
      <h3>Education</h3>
    </div>
    <ul>
      <li><i class="fas fa-user-graduate icon" aria-hidden="true"></i><span>M.S. in Computer Science &amp; Technology, Beijing Institute of Technology (2026 – 2029)</span></li>
      <li><i class="fas fa-university icon" aria-hidden="true"></i><span>B.S. in Computer Science &amp; Technology, Beijing Institute of Technology (2022 – 2026)</span></li>
      <li><i class="fas fa-map-marker-alt icon" aria-hidden="true"></i><span>Beijing, China</span></li>
    </ul>
  </div>
  <div class="info-card">
    <div class="info-card__header">
      <div class="info-card__icon"><i class="fas fa-robot" aria-hidden="true"></i></div>
      <h3>Research Focus</h3>
    </div>
    <ul>
      <li><i class="fas fa-check icon" aria-hidden="true"></i><span>Generative Retrieval System Evaluation</span></li>
      <li><i class="fas fa-check icon" aria-hidden="true"></i><span>Research Evaluation for Scientific Peer Review</span></li>
      <li><i class="fas fa-check icon" aria-hidden="true"></i><span>Natural Language Processing</span></li>
      <li><i class="fas fa-check icon" aria-hidden="true"></i><span>Large Language Models</span></li>
    </ul>
  </div>
  <div class="info-card">
    <div class="info-card__header">
      <div class="info-card__icon"><i class="fas fa-hands-helping" aria-hidden="true"></i></div>
      <h3>Collaboration</h3>
    </div>
    <ul>
      <li><i class="fas fa-lightbulb icon" aria-hidden="true"></i><span>Open to research internships &amp; collaborations</span></li>
      <li><i class="fas fa-network-wired icon" aria-hidden="true"></i><span>Enthusiastic about interdisciplinary teamwork</span></li>
      <li><i class="fas fa-rocket icon" aria-hidden="true"></i><span>Passionate about creating measurable impact with AI</span></li>
    </ul>
  </div>
</div>

## Technical Stack

<div class="tech-stack">
  <div class="tech-stack__group">
    <h3>Programming Languages</h3>
    <div class="badge-row">
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
      <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
      <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
      <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin">
      <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" alt="Dart">
    </div>
  </div>
  <div class="tech-stack__group">
    <h3>Frameworks &amp; Libraries</h3>
    <div class="badge-row">
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch">
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow">
      <img src="https://img.shields.io/badge/Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Transformers">
      <img src="https://img.shields.io/badge/LangChain-121212?style=for-the-badge&logo=chainlink&logoColor=white" alt="LangChain">
    </div>
  </div>
  <div class="tech-stack__group">
    <h3>Web Development</h3>
    <div class="badge-row">
      <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js">
      <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot">
      <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
    </div>
  </div>
  <div class="tech-stack__group">
    <h3>Tools &amp; Platforms</h3>
    <div class="badge-row">
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
      <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux">
      <img src="https://img.shields.io/badge/CUDA-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="CUDA">
    </div>
  </div>
  <div class="tech-stack__group">
    <h3>Databases</h3>
    <div class="badge-row">
      <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    </div>
  </div>
</div>

## Featured Projects

<div class="project-grid">
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-satellite-dish" aria-hidden="true"></i></div>
    <h3>ResearchRadar</h3>
    <p>ArXiv intelligence tool that tracks multi-week trends, clusters papers into topic maps, and answers research questions via local RAG. Supports Ollama, DeepSeek, and OpenAI — all data stored locally.</p>
    <div class="project-card__meta">
      <span>Python</span>
      <span>RAG</span>
      <span>TypeScript</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/research-radar" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
    <h3>G-CoS</h3>
    <p>Interpretable gain-cost framework for user satisfaction estimation in generative information retrieval, published as a SIGIR 2026 short paper.</p>
    <div class="project-card__meta">
      <span>IR</span>
      <span>LLM</span>
      <span>Evaluation</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/Academic-Hammer/G-CoS" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://doi.org/10.1145/3805712.3809934" target="_blank"><i class="fas fa-book-open"></i> Paper (ACM DL)</a>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-comments" aria-hidden="true"></i></div>
    <h3>ReviewLLM</h3>
    <p>Designed a large language model pipeline that drafts high-quality academic peer reviews, combining retrieval-augmented prompts with rubric-aware critique generation.</p>
    <div class="project-card__meta">
      <span>NLP</span>
      <span>LLM</span>
      <span>RAG</span>
    </div>
  </div>
  <div class="project-card">
    <div class="project-card__icon"><i class="fas fa-book" aria-hidden="true"></i></div>
    <h3>心迹 · Diary</h3>
    <p>Privacy-focused personal diary web app with rich-text editing, mood tracking, tag classification, calendar check-in, and writing statistics. Fully Dockerized with React + Node.js + PostgreSQL.</p>
    <div class="project-card__meta">
      <span>React</span>
      <span>Node.js</span>
      <span>PostgreSQL</span>
    </div>
    <div class="project-card__links">
      <a href="https://github.com/nova728/diary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</div>

## Get in Touch

<div class="callout">
  <p><i class="fas fa-paper-plane" aria-hidden="true"></i> I love discussing research collaborations, creative AI applications, and opportunities to bring large language models into real-world workflows. Reach out via <a href="mailto:1120220612@bit.edu.cn">email</a> or connect with me on <a href="https://github.com/nova728">GitHub</a>.</p>
</div>
