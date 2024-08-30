import React from 'react'

export interface ContentListProps {
  selected?: number,
  title?: string,
  items?: { titleIndex: string, title: string }[]
}

const ContentList: React.FC<ContentListProps> = (props) => {
  return (
    <section id="sections" className="flex justify-center p-3 sm:p-10  mt-20 bg-black/5 dark:bg-white/10">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="aspect-square flex flex-col p-5">
          <p className="text-3xl max-[540px]:text-lg font-medium mb-4 flex-1">{props?.title ?? ''}</p>
        </div>
        {props?.items?.map((item, index) => {
          let className = 'opacity-40'

          if (props.selected === index) className = ''

          return (
            <div key={item.title} className={`aspect-square flex flex-col p-5 bg-background ${className}`}>
              <p className="text-3xl font-medium mb-4 self-end flex-1">{item.titleIndex}</p>
              <p className="font-medium self-end text-3xl max-[540px]:text-lg">{item.title}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ContentList
