---
title:  Linky AI
date: 2024-04-13
description: A tool to distill essential data from web pages.
tag: Programming, Hackathon
author: Marcus Lee
---

# Linky AI

At [MariHacks 2024](https://marihacks-2024.devpost.com/), my team and I embarked on an ambitious project to transform how we interact with online information. Our creation, Linky, emerged as a powerful tool to distill essential data from web pages. Here’s a detailed look at our experience and the technology behind Linky.
Team Effort

## The Team

I worked on this project with my partner from previous hackathons [Carson Spriggs](https://github.com/carsonSgit/). We were a team of two, but we were able to divide the work efficiently and effectively.

## The Concept

The idea for Linky came from an [article written by IBM](https://research.ibm.com/blog/retrieval-augmented-generation-RAG) that describes a system that uses AI to retrieve and generate content in an intelligent way. This concept was a great starting point for our project. As programmers, we often find ourselves sifting through large amounts of documentation and articles to find the information we need. Linky aims to simplify this process by providing a concise summary of the content we are interested in, without hallucinating or misinterpreting the data like LLMs often do.

The idea for the name/character of Linky comes from the Pacman ghosts, Inky, Blinky, Pinky, and Clyde. We thought it was a fun and fitting name for our project.

![Linky Hero Banner](https://github.com/GodPuffin/linky/assets/92652800/72690536-1b0d-49ea-9a19-2578bf98caf6)

## What Linky Does

Linky simplifies the research process. Users submit a URL, and Linky parses the content into chunks. Using [OpenAI's ADA v2](https://openai.com/blog/new-and-improved-embedding-model), this data is then stored in a [Pinecone](https://www.pinecone.io/) Vector database. When a user poses a question, the relevant information is retrieved from the database and prompted to GPT 3.5 turbo for a response. This process ensures that the information is accurate and relevant to the user's query. The way Linky's prompt is made ensures that it'll only reply to questions it has a definite answer to.

## Technologies We Used

TypeScript: For robust, scalable application development.

Pinecone Vector Database: For storing and retrieving chunks of information.

RAG AI Model: Vercel's AI SDK, OpenAI's GPT-3.5 turbo and ADA v2 embeddings.

Vercel: For deployment, ensuring smooth operation and accessibility.

## Challenges and Solutions

The development wasn’t without its challenges. We struggled with issues such as consistency in UI and ensuring that updates were promptly deployed. However, we overcame these hurdles by maintaining open communication and leveraging each other’s strengths.

## Results and Learning

By the end of the long night that was the hackathon, we had a working prototype of Linky which was able to reply to questions with context relevant information and refuse to answer questions to which it did not have the definite answer. We were thrilled with the results and the potential of our creation. The experience taught us valuable lessons in teamwork, problem-solving, and the power of technology to simplify complex tasks.

## Experience

MariHacks 2024 was an exhilarating experience that pushed our limits and expanded our capabilities. Linky stands as a testament to our team's dedication and creativity in solving real-world problems through technology. We are excited to see how Linky evolves and helps transform the landscape of digital research.

## Try It Out

At the time of writing, Linky is up and running. You can check it out at [Linky](https://www.linky.im/). Feel free to explore and let us know what you think!

---
[Linky Github Repository](https://github.com/GodPuffin/linky)