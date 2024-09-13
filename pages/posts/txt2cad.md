---
title:  Txt2Cad
date: 2024-09-12
description: Create 3D models from prompt
tag: Programming, Hackathon
author: Marcus Lee
---

# Txt2CAD

## Inspiration

We were inspired by the recent release of KittyCAD's TypeScript design API. While we did not end up using it, it was a good starting point for the idea of the project.

## What it does

Txt2CAD allows you to create simple, straightforward designs simply by explaining them. You can then refine these designs using follow-up prompts and visual feedback provided by the LLM.

## How we built it

Txt2CAD is a NextJS app and Flask server running a GPT agent which defines task parameters and subtasks. It then creates other agents to solve the defined components by generating cadquery code. This code is run and checked for errors until it successfully creates the desired design. Throughout the process, a Mistral small agent sends updates to the user about what is currently happening in the app.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/islJ2jZH4RE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

