import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react"

const words = [
  "Python", "C++", "JavaScript", "TypeScript", "SQL",
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT",
  "Git", "Docker", "AWS", "Postman", "Tableau", "Cloudinary",
  "DSA", "OOP", "DBMS", "OS"
]

export const TapeSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
          <div className="flex [mask-Image:linear-gradient(to_right,transparent,black_10%,back_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, wordIdx) => (
                    <div key={`${word}-${wordIdx}`} className="inline-flex items-center gap-4">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

