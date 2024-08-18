import { useUpdateTitle } from "../hooks/useUpdateTitle"

export const About = ({title}) => {
  useUpdateTitle(title);
  return (
    <main>
        <section>
            <div className="text-slate-900 dark:text-zinc-50 text-xl items-center">
              Братвааааа, все ради вас
            </div>
        </section>
    </main>
  )
}
