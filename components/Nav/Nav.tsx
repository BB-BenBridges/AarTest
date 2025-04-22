import {
  AppShell,
  Container,
  Group,
  Image,
  Flex,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import NextImage from "next/image";
import AarsleffLogo from "/public/Aarsleff Logo.png";
import AarsleffLogoWhite from "/public/Aarsleff Logo White.png";
import classes from "./Nav.module.css";
import cx from "clsx";
import { IconDatabase } from "@tabler/icons-react";
import NavFooterForms from "./NavFooterForms/NavFooterForms";
import NavButton from "./NavButton/NavButton";
import { useRouter } from "next/router";
import NavFooterSettings from "./NavFooterSettings/NavFooterSettings";
import SideNav from "./SideNav/SideNav";
// import * as Sentry from "@sentry/nextjs";

import { useEffect } from "react";
import { useAuth, UserButton } from "@clerk/nextjs";

export default function Nav({ children }: { children: React.ReactNode }) {
  const { width } = useViewportSize();
  const router = useRouter();
  const { isSignedIn } = useAuth();

  // if (session?.user) {
  //   Sentry.setUser({
  //     email: session?.user.email as string,
  //     name: session?.user.name,
  //   });
  // }

  return (
    <AppShell
      padding="md"
      header={{ height: 60, collapsed: width < 1024 }}
      footer={{ height: 75, collapsed: width >= 1024 || !isSignedIn }}
      navbar={{ width: 80, breakpoint: 1024, collapsed: { desktop: isSignedIn ? false : true, mobile: true }}}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              component={NextImage}
              src={AarsleffLogo}
              alt="My image"
              h={30}
              className={cx(classes.dark)}
            />
            <Image
              component={NextImage}
              src={AarsleffLogoWhite}
              alt="My image"
              h={30}
              className={cx(classes.light)}
            />
            {isSignedIn ? (
              <div id="UserAvatar">
                <UserButton />
              </div>
            ) : null}
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <SideNav />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer id="footer">
        <Container size="xs" px="30px" mb="10px">
          <Flex justify="space-between" align="center" mt={5}>
            <div id="dataLink">
              <NavButton
                label={"Data"}
                Icon={IconDatabase}
                onClick={() => router.push("/data")}
              />
            </div>
            <div id="formsLink">
              <NavFooterForms/>
            </div>
            <div id="userLink">
              <NavFooterSettings/>
            </div>
          </Flex>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
