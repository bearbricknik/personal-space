import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { NotFound } from '@/components/not-found'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { DateSelector } from '@/components/date-selector'

const loveStoryParams = [
  'angelina'
]

const PlusPunkt = ({ count = 1, brackets = true }) => {
  return (
    <span className="font-semibold">{brackets ? '(' : ''}Pluspunkt (+{count}){brackets ? ')' : ''}</span>
  )
}

function LoveStoryPage({ params }) {

  const { slug } = params

  if (!loveStoryParams.includes(slug)) {
    return <NotFound />
  }

  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle={`Die etwas "andere" Bewerbung`} />
      <div className="content-wrapper">
        <div className="content">

          {/** Generic Content, can be used for all love stories */}
          <PageTitle title={`Die etwas "andere" Bewerbung`} />
          <p>{`Schau mal ${capitalizedSlug}...`}</p>

          <p>Wir wissen beide, dass ein einfaches "Hey, wie gehts?" 🖐 heutzutage einfach nicht reicht und man aus der Masse der Anfragen herausstechen muss. Deswegen habe ich mir gedacht, dass ich meine Bewerbung an dich auf meiner Website bereitstelle, sodass auch deine Freunde die Bewerbung lesen können (und hoffentlich approven). Ich würde sagen alleine dafür gibt es schon einen <PlusPunkt />.</p>

          <p>Kurzer Zwischenstand an gesammelten Pluspunkten: <span className="font-semibold">1</span></p>

          <PageTitle title={`Wären wir nicht ein schönes Paar?`} />
          <p>Ich gebe zu, dass ich ein bisschen verpeilt aussehe, liegt vermutlich daran, dass ich einen 22 Stunden Flug hinter mir habe. Aber ich bin sicher, dass wir zusammen sehr gut aussehen würden. Dafür würde ich uns einen weiteren <PlusPunkt /> geben. Bisher schlagen wir uns ziemlich gut zusammen würde ich behaupten.</p>
          <ImagePlayground imagePathLeft='/dominik.jpg' imagePathRight={`/${slug}.jpg`} />

          {/** Individual Content*/}
          <Angelina slug={slug} />
          <AboutMe />

          {/** Generic Content, can be used for all love stories */}
          <PageTitle title={`Das große Date`} />
          <p>So, fassen wir nochmal zusammen. Wir beide Matchen. Punkt. Aus. Basta.</p>
          <p>Ich habe bereits <span className='font-semibold'>mindestens 5 Pluspunkte</span> gesammelt. Ich würde fast sagen, dass das ausreicht für das erste Date, was sagst du? Deshalb stell ich dir jetzt die Frage, ob du mir mir ausgehen möchtest? Du kannst die Frage mit den Buttons unten beantworten.</p>
          <DateSelector />
        </div>
      </div>
    </ScrollArea>
  )
}

const Angelina = ({ slug }) => {

  if (slug !== 'angelina') return null

  return (
    <>
      <p>Na gut, wir beide wissen, dass Oberflächlichkeiten keine Rolle spielen, deshalb geht es im nächsten Kapitel mehr um die Gemeinsamkeiten und inneren Werte.</p>

      <PageTitle title={`Die Gemeinsamkeiten...`} />
      <p>... und ja wir haben einiges gemeinsam. Wenn ich nach deinem Profil gehe, dann gehst du sehr gerne reisen und warst auch schon in einigen Ländern. Witzigerweise waren wir beide schon in Australien und in Thailand (da haben wir schon den ersten Gesprächsstoff für unser erstes Date gefunden). Reisen scheint dir auf jeden Fall sehr wichtig zu sein, und so auch mir <PlusPunkt />.</p>

      <p>Da du dich selbst als ein "spontaner" Roadtrip voller Überraschungen beschreibst, gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten (ich bin gespannt für welche du dich entscheidest):</p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste. Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.</p>

      <p>Aber viel interessanter ist, dass du ebenfalls auf dem Tomorrowland 2024 warst und wir uns da nicht gesehen haben 🙁. Warst du bisher nur einmal oder schon mehrfach? Und wie hat es dir gefallen? Daraus entnehme ich ebenfalls, dass du ein großer <span className='font-semibold'>Techno-Fan</span> bist? Klangkünstler? Amelie Lens? 999999999? Sarah Landry? Anyma? Ich denke alle diese DJ's sind dir ein Begriff, oder? Und zack, da haben wir die nächste Gemeinsamkeit: Wir hören beide gerne Techno <PlusPunkt />.</p>
    </>
  )
}

const AboutMe = () => {
  return (
    <>
      <p>Na gut, kommen wir nun zu ein paar Fakten über mich...</p>

      <PageTitle title={`Ich, Myself and I`} />
      <p>Ich heiße Dominik, ich bin 28 Jahre jung (wichtig) und ich wohne gar nicht weit weg von dir, in Nersingen. Zumindest habe ich dort gewohnt, bis ich nach Köln gezogen bin (Stop bevor du dir denkst, dass Köln viel zu weit weg ist, gib mir ein paar Zeilen Zeit um dir alles zu erklären).</p>
      <p>Ich habe mich mit 4 Freunden und jetzt Geschäftspartnern vor <span className='font-semibold'>2 1/2 Jahren Selbstständig</span> im Bereich Softwareentwicklung gemacht und seitdem arbeiten wir gemeinsam an Projekten in Köln (da dort unser Büro ist).</p>
      <p>Mir ist Sport sehr wichtig, ich gehe regelmäßig ins Gym und Joggen (wenn ich die Motivation finde mich bei der aktuellen Jahreszeit nach draußen zu bewegen). Wenn die Saison es erlaubt, bin ich sehr oft draußen in der Natur Golf spielen.</p>
      <p>Wenn es einen Preis für ein Talent gibt, bei dem man so viele Fakten über das Universum wissen muss, wie nur möglich, würde ich den wohl mit Leichtigkeit gewinnen.</p>
      <p>Vielleicht hast du dich bis hier hin gefragt, warum ich zwei Roadtripe Ziele in Italien ausgewählt habe? Nun, ich bin ein sehr großer Pizza Liebhaber. P.S: Ich würde trotzdem mit dir meine Pizza teilen (<PlusPunkt brackets={false} />).</p>
      <p>Ich hoffe, dass dir Tiere genauso wichtig sind wie mir. Noch habe ich kein Haustier, aber ich werde irgendwann einen Hund in meinem Leben brauchen, hoffe damit kommst du klar. Keine Katze leider, weil ich davon überzeugt bin, dass Katzen heimlich die <span className='font-semibold'>Weltherrschaft</span> planen.</p>
      <p>Natürlich war das noch nicht alles, ich hab natürlich noch weitere Talente wie beispielsweise: Atmen, Wasser trinken, Schlafen, Laufen etc. Aber wenn ich jetzt anfange, alles aufzuzählen, dann sind wir am Ende bei 200 Pluspunkten.</p>
      <p>Ich will auch noch nicht alles preisgeben, den Rest erfährst du dann bei unserem ersten Date, wozu wir jetzt kommen werden...</p>
    </>
  )
}

const ImagePlayground = ({ imagePathLeft, imagePathRight, emojiMiddle = null }) => {

  return (
    <div className='flex w-full items-center justify-center gap-4 pb-16 pt-8'>
      <div className='relative aspect-square flex-1 origin-center rotate-3 overflow-hidden rounded-lg md:max-w-[280px] md:flex-none'>
        <Image
          src={imagePathLeft}
          alt='Dominik'
          width={1000}
          height={1000}
          className='size-full object-cover'
        />
      </div>

      {!emojiMiddle ? <Heart size={28} className='shrink-0 fill-red-500 text-red-500' /> : <span className='text-2xl'>{emojiMiddle}</span>}

      <div className='relative aspect-square flex-1 origin-center -rotate-3 overflow-hidden rounded-lg md:max-w-[280px] md:flex-none'>
        <Image
          src={imagePathRight}
          alt='Angelina'
          width={1000}
          height={1000}
          className='size-full object-cover'
        />
      </div>
    </div>
  )
}

export default LoveStoryPage