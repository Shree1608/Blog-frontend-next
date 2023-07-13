import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon ,ArrowUpOnSquareStackIcon,ArrowUpOnSquareIcon,ShareIcon, PencilSquareIcon ,Square2StackIcon,ViewColumnsIcon ,ViewfinderCircleIcon} from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: PencilSquareIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ShareIcon,
    },
  ]
const Section2 = () => {
  return (
   
    <div className="overflow-hidden bg-white py-24 sm:py-32  " id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none  ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7  text-cyan-600">Create faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create blog and share it with your friends</p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-cyan-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/businesswoman-office-with-e-mail-marketing-icons_24877-51249.jpg?size=626&ext=jpg&ga=GA1.1.629035055.1681884183&semt=ais"
            alt="Product screenshot"
            className="  w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem] md:-ml-5 lg:-ml-[-100px]  transition duration-300 ease-in-out hover:scale-110"
            // width={2430}
            // height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Section2
