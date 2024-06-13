"use client";

import { Button } from "@/components/ui/button";
import { useSettings } from "@/store/use-settings";

const Test = () => {
  const settings = useSettings();

  return (
    <div>
      <Button onClick={settings.incrementCount}>+++++</Button>
      <Button onClick={settings.decrementCount} variant={"outline"}>
        -----
      </Button>
      <span>{settings.count}</span>
    </div>
  );
};

export default Test;
