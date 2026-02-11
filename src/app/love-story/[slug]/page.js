'use client'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { NotFound } from '@/components/not-found'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { DateSelector } from '@/components/date-selector'

const loveStoryParams = [
  'annalena',
  'angelina',
  'antonia',
  'sarah',
  'me-and-sarah',
  'merle',

  'karneval'
]

const finalPlusPoints = {
  annalena: 4,
  angelina: 5,
  antonia: 5,
  sarah: 5,
  'me-and-sarah': 5,
  merle: 4,
  karneval: 3
}

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

  let capitalizedSlug = ""

  if (slug === 'me-and-sarah') {
    capitalizedSlug = "Sarah"
  } else if (slug === 'karneval') {
    capitalizedSlug = ""
  } else {
    capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1)
  }

  const sendWebhook = async (answer) => {
    try {
      await fetch('/api/discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer,
          slug,
          message: `Someone answered "${answer}" for ${capitalizedSlug}'s love story!`
        }),
      });
    } catch (error) {
      console.error('Failed to send webhook:', error);
    }
  }

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle={`Die "andere" Bewerbung`} />
      <div className="content-wrapper">
        <div className="content">

          {/** Generic Content, can be used for all love stories */}
          <PageTitle title={`Die etwas "andere" Bewerbung`} />
          <p>{`Schau mal ${capitalizedSlug}...`}</p>

          <p>Wir wissen beide, dass ein einfaches "Hey, wie gehts?" 🖐 einfach nicht
            reicht und man herausstechen muss. Deswegen habe ich mir gedacht,
            dass ich mich kurz vorstelle und dir unsere potenzielle Zukunft aufzeige, aber nicht auf dem normalen Weg, sondern über die Webseite, sodass auch deine Freunde meine Bewerbung
            lesen können (und hoffentlich approven). Ich würde sagen alleine dafür gibt es schon einen <PlusPunkt />.
          </p>

          <p>Kurzer Zwischenstand an gesammelten Pluspunkten: <span className="font-semibold">1</span></p>

          {slug !== 'karneval' ? (
            <>
              <PageTitle title={`Wären wir nicht ein schönes Paar?`} />
              <p>Ich gebe zu, dass ich ein bisschen verpeilt aussehe,
                liegt vermutlich daran, dass ich einen 22 Stunden Flug hinter mir habe.
                Aber ich bin sicher, dass wir zusammen sehr gut aussehen würden.
                Dafür würde ich uns einen weiteren <PlusPunkt /> geben.
                Bisher geben wir doch ein ziemlich gutes Bild zusammen ab, oder?
              </p>
              <ImagePlayground imagePathLeft='/dominik.jpg' imagePathRight={`/${slug}.jpg`} />

              <p>Na gut, wir beide wissen, dass Oberflächlichkeiten keine Rolle spielen,
                deshalb geht es im nächsten Kapitel mehr um die Gemeinsamkeiten und inneren Werte.
              </p>

              <PageTitle title={`Die Gemeinsamkeiten...`} />

              {/** Individual Content*/}
              <Annalena slug={slug} />
              <Angelina slug={slug} />
              <Antonia slug={slug} />
              <Sarah slug={slug} />
              <SarahStory slug={slug} />
              <Merle slug={slug} />

              <AboutMe slug={slug} />

              <PageTitle title={`Das große Date`} />
              <p>So, fassen wir nochmal zusammen. Wir beide Matchen. Punkt. Aus.</p>
              <p>Bisher habe ich <span className='font-semibold'>mindestens {finalPlusPoints[slug]} Pluspunkte</span> gesammelt.
                Ich würde fast sagen, dass das ausreicht für das erste Date, was sagst du?
                Deshalb stell ich dir jetzt die Frage, ob du mit mir ausgehen möchtest?
                Du kannst die Frage mit den Buttons unten beantworten.
              </p>
            </>
          ) : null}

          {slug === 'karneval' ? (
            <>
              <PageTitle title={`Das Schicksal hat uns zusammengeführt`} />
              <p>
                Wenn du das hier liest, bedeutet das vermutlich, dass irgendso ein Typ mutig genug war dich anzusprechen…
                und du neugierig genug warst, das Einschreiben entgegenzunehmen. Ich würde sagen: solider Start für unsere gemeinsame love Story, findst du nicht? Würdig für einen weiteren <PlusPunkt />.
              </p>
              <p>Stell dir das mal vor — irgendwann sitzen wir mit Freunden zusammen, jemand fragt wie wir uns kennengelernt haben, und wir sagen ganz lässig:</p>
              <p>„Ach, ganz klassisch… Karneval, ein Irrer mit einem Brief, ein Einschreiben, und eine leicht überambitionierte love story auf einer Webseite.“ Und alle denken sich: Ja klar — genau so beginnt große Liebe.</p>

              <PageTitle title={`Ein kleiner Blick in unsere Zukunft`} />
              <p>Du sagst jetzt „Ja“, wir fangen an das erste Date zu planen, und plötzlich nimmt diese Story hier richtig Fahrt auf.</p>
              <p>Vielleicht sitzen wir bald irgendwo zusammen, quatschen viel zu lange, lachen über komplett dumme Sachen und merken irgendwann, dass wir schon wieder vergessen haben auf die Uhr zu schauen. Klingt jetzt schon super, oder?</p>
              <p>Aus dem ersten Date, wird ein zweites. Dann philosophieren wir darüber, wann wir uns unsere erste Villa zulegen, welchen Porsche wir kaufen und wie viele Kinder wir bekommen, um eine glückliche und erfolgreiche Familie zu haben.</p>
              <p>Wer weiß — vielleicht pushen wir uns gegenseitig, erreichen gemeinsam Dinge, wofür wir alleine nicht genug Mut gehabt hätten, planen Trips zusammen, gehen zusammen zum Sport, Reisen durch die Welt oder diskutieren darüber, was wir als Nächstes machen.</p>

              <PageTitle title={`Kurze Vorstellung meinerseits`} />
              <p>Ich heiße Dominik, ich bin 28 und
                ich gebe mir viel zu viel Mühe, unser spontanes Date zu planen.
                Ein paar Fakten über mich: Ich bin Softwareentwickler und Besessen von guten Designs.
                Mir ist Sport sehr wichtig, ich gehe regelmäßig ins Gym und Joggen.
                Ich habe viel zu viel Wissen, wenn es um das Universum geht.
                Und ich bin ein sehr großer Pizza Liebhaber und die italienische Küche ist mir viel zu wichtig (vielleicht liegt es daran, dass ich zu 1/4 Italiener bin).
              </p>

              <p> Natürlich war das noch nicht alles,
                ich hab natürlich noch weitere Talente wie beispielsweise:
                Atmen, Wasser trinken, Schlafen, Laufen etc.
                Aber wenn ich jetzt anfange, alles aufzuzählen, dann sind wir am Ende bei 200 Pluspunkten. (Humor kann ich <PlusPunkt brackets={false} />).
                Ich will auch noch nicht alles preisgeben,
                den Rest erfährst du dann bei unserem ersten Date.
              </p>

              <p>Eins würde mich trotzdem noch interessieren, wenn du dich für eine der beiden Optionen entscheiden könntest, welche Reise würdest du dieses Jahr noch auf dich nehmen? Darüber können wir uns beim ersten Date unterhalten (Für das Planen der ersten Reise würde ich mich selbst einfach mal einen weiteren <PlusPunkt /> geben).</p>
              <ImagePlayground imagePathLeft='/japan.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
              <p className='text-center text-sm'>Links: Tokio, Rechts: Amalfi-Küste</p>
              <p>Kommen wir nun aber zum wichtigsten Teil: Wann sehen wir uns wieder?</p>

              <PageTitle title={`Das große Date`} />
              <p>So, fassen wir nochmal zusammen. Du warst mutig, ich war mutig. Wir beiden passen zusammen.</p>
              <p>Bisher habe ich <span className='font-semibold'>mindestens {finalPlusPoints[slug]} Pluspunkte</span> gesammelt.
                Ich würde fast sagen, dass das ausreicht für das erste Date, was sagst du?
                Deshalb stell ich dir jetzt die Frage, ob du mit mir ausgehen möchtest?
                Du kannst die Frage mit den Buttons unten beantworten und hoffentlich sehe ich deine Antwort, wenn du mir auf Whatsapp schreibst. Meine Nummer hast du ja 😉
              </p>
            </>
          ) : null}

          {/** Generic Content, can be used for all love stories */}
          <DateSelector onAnswer={sendWebhook} />
        </div>
      </div>
    </ScrollArea>
  )
}

const Annalena = ({ slug }) => {

  if (slug !== 'annalena') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Wenn ich nach deinem Profil gehe, dann gehst du sehr gerne reisen und warst auch schon in einigen Ländern.
        Leider war ich noch nicht in Cancún, aber vielleicht lohnt sich nochmal ein Trip gemeinsam dort hin.
        Reisen scheint dir auf jeden Fall sehr wichtig zu sein, und so auch mir <PlusPunkt />.
      </p>

      <p>Bevor wir aber auf die Reise gehen,
        gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
      </p>

      <p>Ich weiss noch nicht sehr viel über dich, aber ich denke das lässt sich relativ unkompliziert herausfinden.
        Dir scheint auf jeden Fall auch Ästhetik sehr wichtig zu sein, zumindest sind deine Fotos echt schön.
        Besonders auch dein Lächeln, das würde ich wirklich gerne mal mit meinen Augen genießen.
      </p>
    </>
  )
}

const Angelina = ({ slug }) => {

  if (slug !== 'angelina') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Wenn ich nach deinem Profil gehe, dann gehst du sehr gerne reisen und warst auch schon in einigen Ländern.
        Witzigerweise waren wir beide schon in Australien und in Thailand
        (da haben wir schon den ersten Gesprächsstoff für unser erstes Date gefunden).
        Reisen scheint dir auf jeden Fall sehr wichtig zu sein, und so auch mir <PlusPunkt />.
      </p>

      <p>Da du dich selbst als ein "spontaner Roadtrip voller Überraschungen" beschreibst,
        gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
      </p>

      <p>Aber viel interessanter ist, dass du ebenfalls auf dem Tomorrowland 2024 warst und wir uns da nicht gesehen haben 🙁.
        Warst du bisher nur einmal oder schon mehrfach? Und wie hat es dir gefallen? Daraus entnehme ich ebenfalls,
        dass du ein großer <span className='font-semibold'>Techno-Fan</span> bist?
        Klangkünstler? Amelie Lens? 999999999? Sarah Landry? Anyma? Ich denke alle diese DJ's sind dir ein Begriff, oder? Du hast
        auch sicher schonmal vom <span className='font-semibold'>Bootshaus in Köln</span> gehört, oder? Da seh ich uns...
        Und zack, da haben wir die nächste Gemeinsamkeit: Wir hören beide gerne Techno <PlusPunkt />.
      </p>
    </>
  )
}

const Merle = ({ slug }) => {

  if (slug !== 'merle') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Witzigerweise waren wir beide schon in Australien, meine Augen würden jederzeit wieder Whitsunday Islands erkennen
        (da haben wir schon den ersten Gesprächsstoff für unser erstes Date gefunden).
        Reisen scheint dir auf jeden Fall sehr wichtig zu sein, und so auch mir <PlusPunkt />.
      </p>

      <p>Da du selbst sagst, dass du alle Länder der Welt gesehen haben möchtest,
        gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
        P.S: Für Apres-Ski und Aperol bin ich aber auch jederzeit zu haben.
      </p>

    </>
  )
}

const Antonia = ({ slug }) => {

  if (slug !== 'antonia') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Wenn ich nach deinem Profil gehe, dann gehst du sehr gerne ins Fitnesstudio und gehst Klettern.
        Mit Klettern kann ich dir leider nicht dienen, bisher hab ich noch keinen Coach gefunden, der mir das beibringen kann.
        Aber vielleicht bist du ja bald mein Coach?
        Jedenfalls sehe ich da schon einen weiteren <PlusPunkt />.
      </p>

      <p>Da du selbst sagst, dass du neue Orte erkunden möchtest und gerne Sonne auf deiner Haut spürst,
        gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
      </p>
    </>
  )
}

const Sarah = ({ slug }) => {

  if (slug !== 'sarah') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Wenn ich nach deinem Profil gehe, dann machst du sehr gerne Sport. Ich weiß noch nicht welchen, aber das finden wir sicherlich heraus.
        Lass mich raten: Fitness Studio, Pilates oder Tennis? Wie ich auf die Optionen komme, weiß ich nicht, aber irgendwie würden alle Optionen gut zu dir passen.
        Jedenfalls sehe ich da schon einen weiteren <PlusPunkt />, nämlich dass wir beide gerne Sport treiben.
      </p>

      <p>Du scheinst auf jeden Fall auch gerne zu reisen, deshalb
        gebe ich dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
      </p>

      <p>P.S: Ich sehe da nicht nur einen weiteren <PlusPunkt />, da wir beide gerne Reisen gehen, sondern du kannst mich auch auf deine Reise nach Lombok mitnehmen, ich war bisher nur in Thailand, aber sonst noch nirgends in Indonesien.</p>
    </>
  )
}

const SarahStory = ({ slug }) => {

  if (slug !== 'me-and-sarah') return null

  return (
    <>
      <p>... und ja wir haben einiges gemeinsam.
        Wenn ich nach deinem Profil gehe, dann machst du sehr gerne Sport (siehst sehr sportlich aus). Ich weiß noch nicht welchen, aber das finden wir sicherlich heraus.
        Lass mich raten: Fitness Studio, Pilates oder Tennis? Wie ich auf die Optionen komme, weiß ich nicht, aber irgendwie würden alle Optionen gut zu dir passen.
        Jedenfalls sehe ich da schon einen weiteren <PlusPunkt />, nämlich dass wir beide gerne Sport treiben.
      </p>

      <p>Du scheinst auf jeden Fall auch auf Abenteuer zu stehen. Ich finde deine Optionen mit dem Freizeitpark oder dem Welness in den Bergen sehr spannend, ABER wir können es noch ein wenig spannender machen.
        Ich gebe dir zwei Roadtrip-Optionen, die wir gemeinsam erkunden könnten
        (ich bin gespannt für welche du dich entscheidest):
      </p>

      <ImagePlayground imagePathLeft='/neapel.jpg' imagePathRight='/amalfi-kueste.jpeg' emojiMiddle='🤔' />
      <p>Zu deiner Linken: Neapel und zu deiner Rechten: Amalfi-Küste.
        Schreib dir deine Antwort auf, darüber werden wir uns sicher beim ersten Date einig.
      </p>

      <p>P.S: Ich sehe da nicht nur einen weiteren <PlusPunkt />, da wir beide auf Abenteuer stehen, sondern das kann ja erst der Anfang sein einer noch viel längeren Reise.</p>
    </>
  )
}

const AboutMe = ({ slug }) => {
  return (
    <>
      <p>Na gut, kommen wir nun zu ein paar Fakten über mich...</p>

      <PageTitle title={`Me, Myself and I`} />
      <p>Ich heiße Dominik, ich bin 28 Jahre jung (wichtig) und ich wohne gar nicht weit weg von dir, in Nersingen.
        Zumindest habe ich dort gewohnt, bis ich nach Köln gezogen bin
        (Stop bevor du dir denkst, dass Köln viel zu weit weg ist, gib mir ein paar Zeilen Zeit um dir alles zu erklären).
      </p>

      <p>Ich habe mich mit 4 Freunden und jetzt Geschäftspartnern vor {" "}
        <span className='font-semibold'>2 1/2 Jahren Selbstständig</span> {" "}
        im Bereich Softwareentwicklung gemacht und seitdem arbeiten wir gemeinsam an Projekten in Köln (da dort unser Büro ist).
      </p>

      <p>Mir ist Sport sehr wichtig, ich gehe regelmäßig ins Gym und Joggen
        (wenn ich die Motivation finde mich bei der aktuellen Jahreszeit nach draußen zu bewegen).
        Wenn die Saison es erlaubt, bin ich sehr oft draußen in der Natur Golf spielen.
      </p>

      <p>Wenn es einen Preis für ein Talent gibt,
        bei dem man so viele Fakten über das Universum wissen muss wie nur möglich,
        würde ich den wohl mit Leichtigkeit gewinnen.
      </p>

      <p>Ich bin ein wenig Besessen von guten Designs.
        Da ich in meiner Firma derjenige bin, der das Aussehen einer Webseite oder App programmiert,
        lege ich besonderen Wert auf gutes Design (Ich hoffe man sieht das auch).
      </p>

      <p>Vielleicht hast du dich bis hier hin gefragt, warum ich zwei Roadtrip Ziele in Italien ausgewählt habe?
        Nun, ich bin ein sehr großer Pizza Liebhaber.
        P.S: Ich würde trotzdem mit dir meine Pizza teilen (<PlusPunkt brackets={false} />).
      </p>

      {slug === 'angelina' ? (
        <p>Ich hoffe, dass dir Tiere genauso wichtig sind wie mir.
          Noch habe ich kein Haustier, aber ich werde irgendwann einen Hund in meinem Leben haben,
          hoffe damit kommst du klar.
          Keine Katze leider, weil ich davon überzeugt bin, dass Katzen heimlich
          die <span className='font-semibold'>Weltherrschaft</span> planen.
        </p>
      ) : null}

      {slug === 'antonia' ? (
        <p>Wie ich sehe sind dir Tiere genauso wie mir wichtig.
          Noch habe ich kein Haustier, aber ich werde irgendwann einen Hund in meinem Leben haben
          und da du bereits ein Hund hast, haben wir auch hier schon einen weiteren <PlusPunkt />.
          Keine Katze leider, weil ich davon überzeugt bin, dass Katzen heimlich
          die <span className='font-semibold'>Weltherrschaft</span> planen.
        </p>
      ) : null}

      <p> Natürlich war das noch nicht alles,
        ich hab natürlich noch weitere Talente wie beispielsweise:
        Atmen, Wasser trinken, Schlafen, Laufen etc.
        Aber wenn ich jetzt anfange, alles aufzuzählen, dann sind wir am Ende bei 200 Pluspunkten.
      </p>

      <p>Ich will auch noch nicht alles preisgeben,
        den Rest erfährst du dann bei unserem ersten Date,
        wozu wir jetzt kommen werden...
      </p>
    </>
  )
}

const ImagePlayground = ({ imagePathLeft, imagePathRight, emojiMiddle = null }) => {

  return (
    <div className='flex w-full items-center justify-center gap-4 pb-16 pt-8'>
      <div className='relative aspect-square flex-1 origin-center rotate-3 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-102 md:max-w-[280px] md:flex-none'>
        <Image
          src={imagePathLeft}
          alt='Dominik'
          width={1000}
          height={1000}
          className='size-full object-cover'
        />
      </div>

      {!emojiMiddle ? <Heart size={28} className='shrink-0 fill-red-500 text-red-500' /> : <span className='text-2xl'>{emojiMiddle}</span>}

      <div className='relative aspect-square flex-1 origin-center -rotate-3 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-102 md:max-w-[280px] md:flex-none'>
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