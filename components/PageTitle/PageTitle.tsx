import { Group, Title, ActionIcon } from "@mantine/core";
import { IconHelp } from "@tabler/icons-react";

import classes from "./PageTitle.module.css";
import { Driver } from "driver.js";

interface Iprops {
  title: string;
  driver?: Driver;
}

export default function PageTitle({ title, driver }: Iprops) {
  return (
    <Group gap={3}>
      <Title order={2}>{title}</Title>
      {driver && (
        <ActionIcon
          variant="subtle"
          aria-label="Settings"
          onClick={() => driver?.drive()}
        >
          <IconHelp
            style={{ width: "80%", height: "80%" }}
            stroke={1.5}
            className={classes.icon}
          />
        </ActionIcon>
      )}
    </Group>
  );
}
