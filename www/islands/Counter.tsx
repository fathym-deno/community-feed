import type { Signal } from "@preact/signals";
import { AddIcon, SubtractIcon } from "$fathym/atomic-icons";
import { Action } from "@atomic/design";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Action onClick={() => props.count.value -= 1}>
        <>
          <SubtractIcon class="w-[24px] h-[24px] inline" />
          1
        </>
      </Action>
      <p class="text-3xl">{props.count}</p>
      <Action onClick={() => props.count.value += 1}>
        <>
          {/* <AddIcon class="w-[24px] h-[24px] inline" /> */}
          1
        </>
      </Action>
    </div>
  );
}
