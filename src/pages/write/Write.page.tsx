import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function WritePage() {
  return (
    <>
      <Helmet>
        <title>Write | Bloggr</title>
      </Helmet>
      <AppShell.Main>Write Page</AppShell.Main>
    </>
  );
}
