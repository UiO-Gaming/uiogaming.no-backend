// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas/schema";
import { media } from "sanity-plugin-media";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default defineConfig({
  name: "uiogaming_dot_no-backend",
  title: "uiogaming.no backend",
  projectId: "mmqlu667",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S, context) => {
        console.log(S.documentTypeListItems());
        return S.list()
          .title("Innholdstyper")
          .items([
            orderableDocumentListDeskItem({
              type: "author",
              title: "Rekkefølge på styemedlemmer",
              filter: "boardMember == true",
              createIntent: false,
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(
              (i) => !["media.tag"].includes(i.getId()),
            ),
          ]);
      },
    }),
    media(),
  ],
  schema: {
    types: schemas,
  },
});
