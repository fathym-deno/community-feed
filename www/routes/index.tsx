import { Action } from "@atomic/design";
import Counter from "../islands/Counter.tsx";
import { AddIcon } from "$fathym/atomic-icons";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4 [&>*]:(bg-blue-500)">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
      </div>
      <Action>
        <>
          <AddIcon class="w-[24px] h-[24px] inline" />
          1
        </>
      </Action>
    </div>
  );
}
