# Frontend Architecture for Koshiv Roadlines

## 1. Frontend Architecture Goal
Define a consistent, scalable frontend architecture for the Koshiv Roadlines React + TypeScript + Vite + Tailwind CSS app. This document guides folder structure, naming conventions, and component organization before UI development begins.

## 2. Approved Frontend src Folder Structure
The frontend should use a clear, modular structure under `frontend/src/`:

```
frontend/
├── docs/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── sections/
│   ├── config/
│   ├── constants/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

## 3. Component Organization
- `components/layout/`: layout-level components such as `Header.tsx`, `Footer.tsx`, `PageContainer.tsx`, and navigation wrappers.
- `components/ui/`: reusable UI components like `Button.tsx`, `Card.tsx`, `SectionHeading.tsx`, and form controls.
- Keep components small and focused. If a component is reused across multiple sections, place it in `components/ui/`.

## 4. Section Organization
- `sections/`: page sections such as `HeroSection.tsx`, `ServicesSection.tsx`, `BusServiceSection.tsx`, `TruckServiceSection.tsx`, and `ContactSection.tsx`.
- Each section file should encapsulate layout, content placeholders, and local Tailwind utility usage.
- Section files should not contain unrelated business logic.

## 5. Config/Data/Constants Organization
- `config/`: app-level configuration files like `site.config.ts` and `seo.config.ts`.
- `constants/`: static constant definitions such as `navigation.ts`, `routes.ts`, or color/shadow presets.
- `data/`: structured content files like `services.data.ts`, `features.data.ts`, and `site.data.ts`.
- Keep text content and data separate from component implementation.

## 6. Naming Conventions
- React components: `PascalCase`.
- Section files: `HeroSection.tsx`, `ServicesSection.tsx`, `BusServiceSection.tsx`, etc.
- UI components: `Button.tsx`, `Container.tsx`, `SectionHeading.tsx`.
- Data files: `services.data.ts`, `features.data.ts`, `site.data.ts`.
- Config files: `site.config.ts`, `seo.config.ts`.
- Constants: `navigation.ts`, `routes.ts`.
- Types: `types/index.ts` or domain-specific files like `types/service.ts`.

## 7. File Responsibility Rules
- `App.tsx`: root application shell and section composition only.
- `main.tsx`: bootstraps React and renders `App`.
- `index.css`: global Tailwind imports and base styles.
- `components/`: reusable UI and layout components.
- `sections/`: distinct homepage sections with content placeholders.
- `config/` and `constants/`: app settings and static values.
- `data/`: content data for sections and feature lists.
- `types/`: shared TypeScript types and interfaces.
- `utils/`: helper functions and shared utilities.

## 8. What Not to Do
- Do not write feature-specific or business logic into generic UI components.
- Do not place section-level components inside `components/ui/`.
- Do not mix content data with component code.
- Do not create backend or API logic in the frontend folder.
- Do not add routing or page-level complexity in V1.

## 9. Future Scalability Notes
- Keep components composable so sections can be extracted to dedicated pages later.
- Use data-driven section content to simplify future content updates.
- Keep the architecture ready for later expansion to a multi-page site or deeper feature set.

## 10. Notes for DeepSeek/code-generation Phase
- Real production UI code should be generated later using DeepSeek following this architecture.
- Keep the folder structure and naming conventions stable so generated code fits cleanly.
- Use this document as the reference model for folder creation, component naming, and data separation.
