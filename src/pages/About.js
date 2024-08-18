import { useUpdateTitle } from "../hooks/useUpdateTitle"

export const About = ({title}) => {
  useUpdateTitle(title);
  return (
    <main>
        <section>
            <div>
              Братвааааа, все ради вас
            </div>
        </section>
    </main>
  )
}
