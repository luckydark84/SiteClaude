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
- **Portfolio** : remplacer les maquettes navigateur génériques par des captures
  de vrais projets (`.case__visual`), et les métriques par vos vrais chiffres.
- **À propos** : remplacer le monogramme par une vraie photo (`.about__photo`)
  et ajuster les années d'expérience / faits chiffrés à votre parcours réel.
- **Page apropos.html** : le récit (chapitres 1 à 3) et les cartes « Hors
  écran » sont une trame narrative à relire et ajuster à votre vraie
  histoire — notamment l'origine familiale, le parcours en agence et les
  détails personnels, qui doivent être authentiques avant publication.
- **Formulaire de contact** : par défaut il ouvre le client mail
  (`mailto:`). Pour recevoir les messages sans dépendre du client mail du
  visiteur, brancher Formspree/Resend — voir le commentaire dans `script.js`.
- **Tarifs** : ajuster les montants dans la section `#offres`.
- **Mentions légales / RGPD** : ajouter une page mentions légales et, si vous
  ajoutez un outil d'analytics, un bandeau de consentement.
