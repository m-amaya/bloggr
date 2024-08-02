import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ArticlePage() {
  return (
    <>
      <Helmet>
        <title>Article | Bloggr</title>
      </Helmet>
      <AppShell.Main>Article Page</AppShell.Main>
    </>
  );
}
