import { useState } from 'react';

const data = {
  author: {
    name: "Ali Shan",
    role: "Team FFF PAKISTAN",
    date: "Feb. 8, 2023",
    imageSrc: "https://shararpakistan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.f33fe617.png&w=1080&q=75",
    wall: "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?cs=srgb&dl=pexels-pixabay-60013.jpg&fm=jpg",
  },
  title: "Climate Change: A Global Crisis Demanding Immediate Action",
  leadText: "Unraveling the Global Threat: Understanding and Combatting Climate Change",
  content: [
    "Climate change is no longer a distant threat; it is an alarming reality that affects every corner of our planet. The consequences of climate change, such as rising temperatures, extreme weather events, and melting ice caps, are becoming increasingly evident. In this article, we will explore the causes and effects of climate change and discuss the urgent need for collective action to mitigate its impacts.",
    "Understanding Climate Change",
    "1. <b>The Greenhouse Effect:</b> At the heart of climate change is the greenhouse effect. When we burn fossil fuels like coal, oil, and natural gas for energy, we release greenhouse gases such as carbon dioxide (CO2) into the atmosphere. These gases trap heat from the sun, leading to a gradual increase in global temperatures.",
    "2. <b>Rising Temperatures:</b> Over the last century, the Earth's average temperature has risen significantly. This warming trend, often referred to as global warming, has far-reaching consequences for our planet. It disrupts ecosystems, threatens wildlife, and contributes to more frequent and severe weather events.",
    "<b>Conclusion</b>",
    "Climate change is a global crisis that demands immediate attention and action from individuals, communities, governments, and businesses worldwide. The consequences of inaction are dire and affect us all. By working together to reduce greenhouse gas emissions, transition to clean energy, and protect our environment, we can mitigate the worst impacts of climate change and build a sustainable future for generations to come. The time to act is now."
  ],
};

export default function BlogFirst() {
  const backgroundImageStyle = {
    backgroundImage: `url(${data.author.wall})`,
  };

  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const urlToCopy = window.location.href;

    // Use the Clipboard API to copy the URL to the clipboard
    navigator.clipboard.writeText(urlToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
      })
      .catch((error) => {
        console.error('Copy failed!', error);
      });
  };

  return (
    <>
      <div
        className="w-full h-[40vh] bg-cover bg-center"
        style={backgroundImageStyle}
      ></div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={data.author.imageSrc}
                    alt="Ali Shan"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 "
                    >
                      {data.author.name}
                    </a>
                    <p className="text-base text-gray-500 -400">
                      {data.author.role}
                    </p>
                    <p className="text-base text-gray-500 -400">
                      <time dateTime="2023-02-08" title="February 8th, 2023">
                        {data.author.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                {data.title}
              </h1>
            </header>
            <p className="lead py-2">{data.leadText}</p>
            {data.content.map((paragraph, index) => (
              <p className="py-2" key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </article>
        </div>
      </main>

      {/* Copy Button */}
      <div className="flex justify-center flex-col items-center bg-green-800 px-4 mx-auto py-4 text-white font-sans space-y-2 mt-4">
        <h2 className='text-2xl font-bold'>Share the blog</h2>
        <p className='text-sm'>help us spread the word :)</p>
        <button
          className={`${
            copySuccess ? 'bg-white hover:bg-white' : 'bg-white hover:bg-transparent hover:text-white hover:border-white'
          } text-green-600 border py-2 px-4 rounded`}
          onClick={copyToClipboard}
        >
          {copySuccess ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </>
  );
}
