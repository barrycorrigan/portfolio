import { PaperClipIcon } from '@heroicons/react/20/solid'

function App() {

  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-5xl mt-16">
      <div className="px-4 sm:px-0">
        <h1 className="text-base/7 font-semibold text-gray-900">Barry Corrigan</h1>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Frontend Developer</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Barry Corrigan</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Currently applying for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Frontend & Fullstack Developer roles</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><a className="font-medium text-indigo-600 hover:text-indigo-500" href="mailto:mail@barrycorrigan.com">mail@barrycorrigan.com</a></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <p className="mb-5">I'm a web developer with over 15 years of experience in frontend development. I have a strong background in HTML, CSS, and JavaScript, and I'm especially passionate about creating innovative UI/UX solutions. Most recently, I worked as a technical lead at Money Supermarket in the Pet, Life, and Travel Insurance team (PLaNT), where I led a small team of three developers to build new features for our applications using technologies like HTML, CSS, TypeScript, jQuery, Vue.js and C#.</p>
              <p>As I actively seek my next role, I am currently learning React. My passion for technology drives me to constantly strive to learn modern technologies, and I am excited to bring this enthusiasm to future opportunities.</p>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">cv_front_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">1.86kb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="/assets/cv_front_end_developer.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </>
  )
}

export default App
