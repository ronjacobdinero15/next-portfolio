import Reveal from "@/components/reveal"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"

type ViewMoreProjectsBtnProps = {
  toggleMoreProjects: boolean
  setToggleMoreProjects: React.Dispatch<React.SetStateAction<boolean>>
}

function ViewMoreProjectsBtn({
  toggleMoreProjects,
  setToggleMoreProjects,
}: ViewMoreProjectsBtnProps) {
  return (
    <div className="my-12 mb-20 flex justify-center">
      <button
        onClick={() => setToggleMoreProjects((tog) => !tog)}
        className="cursor-pointer"
      >
        <Reveal>
          <div
            className={`${
              toggleMoreProjects &&
              "border-b-accent-500 after:border-t-accent-500 hover:border-b-accent-600 hover:after:border-t-accent-600 [&_svg]:hover:text-stone-200"
            } border-primary-400 after:border-primary-400 hover:border-b-accent-500 hover:after:border-t-accent-500 relative mb-20 border-r-[50px] border-b-[20px] border-l-[50px] border-r-transparent border-l-transparent transition-all duration-200 after:absolute after:top-[19px] after:left-[-50px] after:border-t-[70px] after:border-r-[50px] after:border-l-[50px] after:border-r-transparent after:border-l-transparent after:transition-all after:duration-200 after:content-['']`}
          >
            <span className="absolute top-5 -left-6 z-20 text-5xl">
              {toggleMoreProjects ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </div>
        </Reveal>
      </button>
    </div>
  )
}
export default ViewMoreProjectsBtn
