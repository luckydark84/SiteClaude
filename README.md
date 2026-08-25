# SiteClaude — Site freelance « Sites web premium propulsés par l'IA »

Site vitrine one-page, statique, sans dépendances ni étape de build.
Trois fichiers : `index.html`, `styles.css`, `script.js`.

## Lancer en local

```bash
npx serve .
# ou simplement ouvrir index.html dans un navigateur
```

## Déployer

Compatible tel quel avec GitHub Pages, Vercel, Netlify ou Cloudflare Pages
(pointer sur la racine du dépôt, aucun build nécessaire).

## À personnaliser avant mise en ligne

- **Témoignages et résultats chiffrés** : les exemples fournis sont des
  placeholders — remplacez-les par de vrais retours clients avant publication.
- **Réalisations** : remplacer les visuels génériques par des captures de vrais
  projets (`.work__visual`).
- **Formulaire de contact** : par défaut il ouvre le client mail
  (`mailto:`). Pour recevoir les messages sans dépendre du client mail du
  visiteur, brancher Formspree/Resend — voir le commentaire dans `script.js`.
- **Tarifs** : ajuster les montants dans la section `#offres`.
- **Mentions légales / RGPD** : ajouter une page mentions légales et, si vous
  ajoutez un outil d'analytics, un bandeau de consentement.
