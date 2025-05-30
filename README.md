# Qui veut être mon associé ?

Ce projet est une API backend développée avec [NestJS](https://nestjs.com/) en TypeScript.

🎯 **Inspiration :** L'application est inspirée de l'émission télévisée française *Qui veut être mon associé ?*, où des entrepreneurs présentent leurs projets à un panel d'investisseurs.  
Elle simule les interactions entre entrepreneurs et investisseurs avec des fonctionnalités comme la soumission de projets, l’évaluation et les propositions d’investissement.

---

## 🚀 Fonctionnalités

- Soumission de projets par des entrepreneurs
- Évaluation des projets par des investisseurs
- Propositions d’investissement
- Gestion des utilisateurs (authentification et autorisation)
- API RESTful respectant les bonnes pratiques

---

## 🛠️ Technologies utilisées

- [NestJS](https://nestjs.com/) – Framework Node.js efficace et modulaire
- TypeScript – Superset de JavaScript avec typage statique
- Jest – Framework de tests
- ESLint & Prettier – Qualité et formatage du code

---

## 📁 Structure du projet

```bash
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
├── nest-cli.json
└── .prettierrc
