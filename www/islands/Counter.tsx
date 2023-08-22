import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { AddIcon, SubtractIcon } from "$fathym/atomic-icons";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>
        <>
          <SubtractIcon class="w-[24px] h-[24px] inline" />
          1
        </>
      </Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>
        <>
          {/* <AddIcon class="w-[24px] h-[24px] inline" /> */}
          1
        </>
      </Button>
    </div>
  );
}
