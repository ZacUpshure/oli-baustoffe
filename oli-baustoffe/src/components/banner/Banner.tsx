// import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <>
        {/* <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white ">
            <a href="#">
            <strong className="font-semibold">Dachbaustoffe Bundesweite Lieferung</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
            </svg>
            030-89060840 Anrufen und auf Maß schneiden lassen&nbsp;<span aria-hidden="true">&rarr;</span>
            </a>
        </p>
        <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            </button>
        </div>
        </div> */}

        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-2xl leading-6 text-white">
              <strong className="font-semibold">Dachbaustoffe Bundesweite Lieferung</strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <a href="tel: +493089060840">030-89060840</a> Anrufen und auf Maß schneiden lassen&nbsp;<span aria-hidden="true">&rarr;</span>
          </p>
          <button type="button" className="-m-1.5 flex-none p-1.5">
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
    </>
  )
}
