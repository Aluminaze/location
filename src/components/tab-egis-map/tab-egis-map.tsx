import React from "react";

import { ButtonMobilePanel } from "./components/button-mobile-panel";
import { useStyles } from "./styles";
import "./index.css";
import { useDisplayStatus } from "../../hooks/use-display-status";
// import { FooterOfPersonalArea } from "../footer-of-personal-area";

export const TabEgisMap = (): JSX.Element => {
  const { classes } = useStyles();

  const { isMobileVersion } = useDisplayStatus();

  const [isOpenMobilePanel, setIsOpenMobilePanel] =
    React.useState<boolean>(false);
  const [isMountedMobilePanel, setIsMountedMobilePanel] =
    React.useState<boolean>(false);

  console.log("🚀 ~ isMountedMobilePanel:", isMountedMobilePanel);

  const handleCloseDialogMobilePanel = (): void => {
    setIsOpenMobilePanel(false);
    setTimeout(() => {
      setIsMountedMobilePanel(false);
    }, 500);
  };

  const handleToggleDialogMobilePanel = (): void => {
    if (isOpenMobilePanel) {
      handleCloseDialogMobilePanel();
    } else {
      setIsMountedMobilePanel(true);
      setIsOpenMobilePanel(true);
    }
  };

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (isMobileVersion) {
      if (body) {
        body.style.overflow = "hidden";
        // body.style.position = "fixed";
      }
    } else {
      if (body) {
        body.style.overflow = "";
        // body.style.position = "";
      }
    }
  }, [isMobileVersion]);

  return (
    <>
      <div className={classes.blockMap}>
        {isMobileVersion ? (
          <ButtonMobilePanel onClick={() => handleToggleDialogMobilePanel()} />
        ) : (
          <div className={classes.panel}>
            <div className={classes.panelWrapper}>PANEL BLOCK</div>
          </div>
        )}
        <div className={classes.map}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          mollitia odio repudiandae eaque pariatur soluta nihil doloribus
          voluptatem, asperiores impedit excepturi dicta dolores cupiditate rem
          fuga officiis possimus quasi quod. Earum doloremque ad laudantium quos
          odit quis repudiandae, modi velit tempore impedit recusandae
          praesentium ducimus fuga ea soluta debitis esse incidunt voluptate
          illo inventore harum ex? Quam amet quibusdam non? Ex a, dolorum ipsa
          magni fugiat ad temporibus quas nemo in odit ipsam eius fuga error
          maxime impedit et corrupti id molestias recusandae optio aut. Vero
          quam quibusdam omnis assumenda? Ipsa corporis, dolores recusandae ad
          magni, cum obcaecati numquam non minus enim temporibus quis at,
          nesciunt necessitatibus esse aliquid deserunt possimus labore eum
          eveniet perferendis. Illum omnis ea expedita tempore. Nam, molestias
          voluptatibus minus dolorum esse autem, necessitatibus molestiae at
          quasi maiores maxime deleniti odit rem qui optio enim dicta ex
          eveniet. Sapiente neque cum iure veniam porro labore quisquam? Nulla
          beatae libero eum necessitatibus et quisquam sunt quam nostrum, quidem
          repellendus praesentium est, rem, maxime nesciunt totam natus in
          asperiores nemo aliquid? Veniam eveniet neque deleniti culpa ea
          repellendus. Iusto impedit ipsam perferendis nobis officia cupiditate,
          est praesentium in odio incidunt temporibus modi, nemo architecto
          saepe ab numquam vitae a ducimus? Dolorem natus eveniet provident sed
          est adipisci sapiente. Eum qui laborum vero id eveniet officia atque
          eaque corrupti eius quidem? Quidem nobis ducimus cupiditate itaque
          tenetur quae, eaque amet iusto saepe, delectus distinctio vero cum
          accusamus alias fuga! Labore vel provident accusantium accusamus
          explicabo aliquam quod, recusandae corrupti quae consequatur,
          cupiditate facilis commodi aperiam nisi repellat harum, odit dolor
          quaerat amet suscipit placeat. Est nam laudantium quam ipsum.
          Provident minus, veniam quia assumenda quisquam et. Doloremque est
          odio aperiam totam. Nam incidunt, ullam iusto soluta itaque explicabo,
          adipisci ut aspernatur tempore ducimus voluptatum, suscipit maiores
          exercitationem dolorem hic? Enim similique mollitia quos saepe aliquam
          ipsa! Expedita, ipsam repudiandae. Culpa, doloribus debitis!
          Aspernatur repellat minima provident? Neque nam maiores quas quam,
          perspiciatis, temporibus, corrupti modi a porro aspernatur mollitia.
          Corporis quisquam dolor ea, temporibus amet ullam repellendus
          explicabo maxime perspiciatis eum voluptate cum illo commodi. Maxime
          at iusto natus, dolorem optio incidunt amet atque assumenda doloremque
          beatae voluptatum inventore. Aperiam porro reprehenderit repellat
          expedita id, recusandae exercitationem neque sit est illum autem eum
          numquam ducimus, nostrum vero quas. Et consectetur qui cupiditate illo
          commodi dolor voluptatum sint officiis voluptates. Expedita maiores
          veniam vitae aspernatur voluptates enim veritatis omnis tempore!
          Neque, esse omnis perspiciatis culpa praesentium fugit quo aliquam
          consequatur vel porro soluta quod debitis similique alias maxime, quis
          iure. Iste sequi commodi eligendi in repellendus magnam, minus enim
          aspernatur sit! Corrupti nostrum quos delectus consectetur in
          excepturi aut beatae eos, ad laboriosam distinctio modi quam ratione,
          mollitia aliquid tempore? Culpa libero odit, quasi qui amet voluptate
          quidem dicta, pariatur ipsum eligendi delectus. Quos enim architecto
          harum sapiente quidem rerum voluptas eligendi animi tempore odit iste,
          consequatur, optio ullam libero! Mollitia harum voluptates, omnis
          minima quas debitis! Cupiditate dolorem culpa soluta iure quia
          voluptate voluptas. Magni non deleniti odit ut, asperiores fuga
          distinctio sequi omnis fugit quam delectus eum nisi. Alias, doloremque
          sequi doloribus nisi, enim nulla recusandae tempora esse pariatur
          ipsam repellendus eius suscipit? Debitis facere tempore sunt illo
          corporis repudiandae soluta libero, necessitatibus molestiae amet
          saepe. Impedit, quasi! Vitae fugiat reiciendis doloremque deleniti
          omnis? Hic mollitia fugiat tenetur nulla facere ex doloremque ipsa ad
          eveniet dolore? Iure est nulla aut recusandae quis, officiis sint?
          Iste error rem libero? Saepe optio eum maxime animi molestiae
          recusandae impedit id ipsa explicabo a dolores, omnis voluptatum
          labore vel veritatis corporis at minima harum! Sit, veritatis numquam
          facilis expedita praesentium minima dolor. Neque ad voluptate ipsam ab
          iste iusto asperiores! Recusandae eius quam perspiciatis! Saepe aut
          nisi, veritatis fuga consequatur dolorem quisquam quasi enim error
          harum repellat explicabo est! In, eaque similique. Illo facere quod,
          amet tempore vero rerum ipsum facilis, ut voluptas eos error, autem
          dolor? Eligendi doloribus repudiandae animi expedita reiciendis
          eveniet autem quidem praesentium tempora, soluta in iste maxime?
          Doloremque corrupti a voluptatum magnam non mollitia esse totam
          accusantium labore ex recusandae enim molestiae placeat ab aspernatur
          possimus explicabo, perspiciatis voluptates quo officia quas. Autem
          neque quasi aperiam. Facilis. Ullam quis, ut veniam nostrum assumenda
          tempora. Reprehenderit laborum quasi velit odit quis mollitia
          consequatur corrupti officiis doloribus architecto, autem aut soluta
          sint ducimus fugit porro voluptas voluptate facere enim. Vel
          distinctio sit ad, nulla voluptatibus sunt omnis eaque nisi est
          inventore blanditiis facere? Harum sit consequuntur dolorem
          reprehenderit, adipisci aliquam labore architecto consequatur,
          corrupti autem praesentium, quae est! Enim! Earum architecto
          reiciendis cupiditate quo tempore odio magni sunt, eius labore
          voluptas. Voluptates, omnis ea at perferendis error, rerum incidunt
          officia minus dolorum hic quae quibusdam voluptate nobis. Soluta,
          culpa! Reiciendis adipisci necessitatibus laudantium voluptate
          sapiente nobis ipsa quidem accusamus maiores eum non error, quaerat
          debitis voluptatibus. Magnam asperiores expedita quos, voluptatem,
          recusandae excepturi voluptas quis, nobis accusamus enim repellat?
          Optio, minima reiciendis voluptatibus atque alias sint nulla, quis
          molestiae repudiandae in a aut vitae iure voluptatum aliquid
          asperiores itaque necessitatibus. Pariatur, neque perferendis nulla
          earum non illum quo voluptatem? Praesentium enim sapiente iure
          dignissimos. Asperiores voluptates deserunt est ratione perspiciatis
          facilis ducimus, blanditiis fuga minus, totam distinctio voluptas
          cumque enim et ea eius. Ipsa sit sunt accusamus. Cum, aut? Assumenda
          officia at atque cupiditate quae quibusdam voluptatem, placeat magni
          unde labore quis iusto deleniti et quasi rerum tempore autem cumque
          explicabo aut aliquam totam ullam ipsa dolorem rem? Provident? Eos
          veritatis praesentium modi quod incidunt debitis, exercitationem ut
          error laudantium similique eveniet earum nihil. Dignissimos quas totam
          veritatis inventore dolores necessitatibus quibusdam molestiae
          asperiores delectus. Quos consequatur delectus quia? Molestias
          expedita dignissimos esse, pariatur iusto, dolores assumenda itaque
          omnis aspernatur harum voluptate totam beatae? Nesciunt, eligendi,
          voluptatem enim molestiae non sapiente atque beatae adipisci
          dignissimos necessitatibus cumque, laudantium aliquam? Similique animi
          excepturi vitae! Cupiditate, deserunt doloribus nobis similique
          consectetur ipsa aut at? Eos, aperiam. Labore illo eligendi fugit
          recusandae sequi deleniti dicta, facilis nam dignissimos molestiae.
          Debitis, perspiciatis neque? Porro vero laborum cum architecto omnis
          iusto perferendis impedit! Accusamus quisquam dolorem, sapiente nulla
          odit animi fugit laboriosam nostrum pariatur temporibus architecto
          provident possimus eveniet nihil sequi, laudantium necessitatibus
          fugiat? Quas aliquam modi culpa minima similique? Rerum temporibus sed
          itaque, nesciunt laborum recusandae labore quidem, facere debitis quae
          laboriosam blanditiis molestiae. Cumque minima ratione possimus neque
          sunt amet, assumenda culpa. Nihil quas eaque magnam pariatur
          inventore? Omnis sequi dolor perspiciatis culpa, sed cum blanditiis
          sapiente velit odit tempora itaque aperiam consequatur eligendi eos
          doloribus quae nemo facilis cupiditate nihil quis! Iure rerum
          doloremque ipsam commodi nam quos! Quam libero, aliquam provident
          nihil ratione eum mollitia qui ipsam ipsum facilis itaque at,
          repellendus nulla exercitationem voluptatum aspernatur minus atque
          consectetur tenetur. Odio ab officiis illum provident ut velit soluta
          aut unde voluptate doloribus. Excepturi odit minima, obcaecati
          inventore nisi, omnis consequuntur minus aperiam nulla, doloremque
          similique mollitia? Ut provident aliquid tempora. Ullam, eligendi
          cupiditate commodi accusamus, nobis dignissimos distinctio dolores
          fugiat maiores vel id consequuntur architecto nemo modi deserunt,
          omnis excepturi neque quia possimus atque facilis minima. Ipsum eum id
          consequuntur. Maxime praesentium nostrum dolorum pariatur ipsa dolores
          aut quaerat. Facilis animi amet voluptate ullam in quibusdam accusamus
          ipsum assumenda quia, eius porro eos neque molestiae unde, nam alias.
          Debitis, dolores! Dolorum, incidunt beatae voluptates est, cum sit
          distinctio, ad unde alias repellat aliquam recusandae eaque laborum?
          Tempora, natus aliquid perferendis sequi praesentium repudiandae
          veritatis velit rerum, nisi animi amet maxime. Consequatur, possimus.
          Amet voluptate autem soluta ratione, repellendus aut nemo esse unde
          aspernatur molestiae! Quibusdam facere libero amet earum eligendi
          dignissimos sapiente nesciunt blanditiis, maiores deserunt aut, est
          similique delectus. Quia quibusdam nulla atque rerum quidem beatae,
          modi assumenda ad minus, expedita iusto corporis consequatur amet
          blanditiis neque fuga hic asperiores tenetur? Culpa, deleniti sit
          dolorum quidem excepturi dolores modi. Placeat deleniti magnam minima
          reprehenderit culpa esse ipsa recusandae nam reiciendis obcaecati
          natus autem laudantium harum architecto vel, ut eius cum officia
          maiores suscipit voluptatum delectus consectetur. Iure, incidunt sed?
          Est a corrupti vero fugiat. Culpa dolores nisi esse cumque modi, error
          quae iste, exercitationem maxime repellendus rem quaerat quibusdam
          fuga quia at alias veniam dignissimos molestiae, fugiat laborum
          architecto. Nam nisi eius ab inventore quaerat ad. Reiciendis ullam
          dolore autem quis expedita qui. Similique consequuntur ab officia?
          Quis praesentium repellendus excepturi repudiandae velit distinctio,
          enim vero. Laborum, dolorem sunt! Vel nihil pariatur possimus
          voluptate consequuntur sit blanditiis, eaque sequi repudiandae ad,
          beatae atque accusamus ipsum quos impedit iusto veritatis, laborum
          dolore? Voluptates est rem nulla ipsum accusamus. Repellat, atque!
          Neque nemo facilis ratione modi. Animi harum temporibus impedit
          asperiores consequuntur et nam sapiente quasi, voluptatibus similique
          eos reiciendis neque consequatur tempora! Neque quia ducimus aperiam
          est consequuntur eveniet itaque. Reiciendis maiores obcaecati facere
          natus suscipit vitae eius nostrum quod, ut at dolore dolorem fugit
          accusamus eos, quas illum esse nihil doloremque laboriosam sunt
          nesciunt rem nobis eaque quos! Dolor! Similique fugit eos tempora hic
          aspernatur nobis odit quia eum consequatur officia cupiditate
          molestiae nam incidunt temporibus facere ratione facilis, placeat
          consectetur vitae voluptatibus enim quidem tempore provident. Neque,
          dicta. Adipisci hic aliquid, nam ipsam quasi libero pariatur veniam
          provident modi fuga rem error mollitia vero sed, fugit cupiditate
          cumque voluptatem quam reprehenderit minima ratione dolore? Doloribus,
          quasi. Quae, nesciunt. Eaque quis mollitia, possimus molestias magni
          quibusdam officiis neque sit fugit iste cumque provident ab, vitae,
          facere dignissimos a? Magnam assumenda expedita deleniti suscipit
          dolor voluptas labore consequatur itaque ex. Amet maiores quaerat
          laudantium dicta iure porro, quo, quia ratione beatae aut magni fugit?
          Aliquid fuga ex hic aperiam sequi voluptatum tempore expedita, harum
          aut aspernatur modi, odit ad consequatur. Iusto magni nemo ab ad quam
          aliquam officia maiores accusantium expedita nisi saepe, rerum
          blanditiis sunt voluptates perferendis possimus praesentium! Porro,
          fuga necessitatibus! Eaque facere quo commodi sed, nesciunt quaerat?
          Perferendis tempore placeat corporis, rerum obcaecati ratione
          voluptatem accusantium. Ab non laudantium inventore minima, sequi
          doloribus quibusdam consectetur! Sunt quaerat sit nemo, molestias
          fugit architecto ad praesentium adipisci quia quae. Facere repellat
          quidem quam, labore officia magnam reprehenderit doloremque iure! Nemo
          reprehenderit ducimus eaque. Vitae iusto porro consectetur suscipit ex
          reiciendis pariatur quam non delectus velit nesciunt, possimus aperiam
          ullam. Rerum sint quam sed cupiditate? Optio vel, laudantium provident
          facilis animi voluptatibus reiciendis voluptatem tempore explicabo
          consequatur quam expedita quos nam beatae nesciunt distinctio dolores
          sit ut quasi minus enim! Iure rem accusantium non eaque eos!
          Necessitatibus nostrum magni iste, corrupti doloribus provident
          aperiam, soluta nisi nemo rem laudantium eius dolores nihil culpa ex
          voluptas error inventore quae aliquam explicabo. Eveniet velit magni
          quam in optio! Esse, nobis totam tenetur magni labore, aspernatur
          voluptatibus facere, illo animi beatae consequuntur tempora neque
          voluptatem magnam hic consequatur nam vel dolor minus officia! Error
          deleniti molestiae voluptatem optio voluptas facere assumenda et ea,
          ipsam aperiam velit similique expedita repellat fuga sit sed sunt? Et
          sit numquam enim aut. Sequi asperiores sint nostrum libero?
          Exercitationem assumenda sint est! Ab impedit esse iure quae dolores?
          Corporis, facere. Illo, vitae, corporis cupiditate temporibus
          dignissimos deleniti ex ab earum nobis quidem maiores, omnis
          accusantium iusto ut voluptatem? Perspiciatis ea id cupiditate atque
          quas pariatur necessitatibus, mollitia omnis natus velit, maiores
          beatae vel vero sequi distinctio, doloremque et. Asperiores inventore
          nostrum veniam. Vero quis saepe deserunt nobis reprehenderit! Dolor
          iure fugit, cumque molestiae non earum optio dolores! Inventore quam
          facilis labore non sed aspernatur animi officia illum? Nostrum ipsam
          reprehenderit molestiae tempora ipsa consequuntur soluta minima
          repellendus sit! Et eum, illo in aliquam odio voluptate harum nemo ab,
          ipsa voluptatum minus totam a enim earum sequi sit rerum aspernatur
          doloribus itaque rem quas, iusto quae! Sequi, reiciendis ratione. In,
          provident tenetur. Cum accusantium nostrum placeat quis unde.
          Voluptatibus repudiandae, a repellendus rerum nostrum tempore illo
          alias animi nisi laudantium, corporis, laborum id debitis sit dolores
          libero et expedita. Iusto impedit doloribus nemo quos maxime nostrum
          reiciendis aut unde ipsum, maiores deserunt quod explicabo suscipit
          quidem ratione error iure eum, provident eaque vero. Alias temporibus
          maiores repellendus perferendis fugit. Dicta odit, minus reprehenderit
          velit, molestias magni quas natus iusto ratione, incidunt cum in?
          Rerum reprehenderit minus, quo quibusdam expedita magnam enim facere,
          omnis corporis at dolor nostrum magni repellat! Beatae provident ipsa
          in possimus aperiam, autem totam animi quibusdam! Ullam expedita est
          recusandae. Tenetur molestiae nobis quasi et voluptatum porro ab
          temporibus animi labore, aliquid deleniti error maxime dolores.
          Maiores quis aliquid unde rerum ad doloremque, temporibus labore
          magnam dignissimos! Ullam quam, illum minus in labore iusto facilis
          natus repellendus similique, fugiat temporibus architecto quasi,
          molestiae commodi autem sed. Quasi doloremque soluta blanditiis vero
          aperiam. Voluptatibus cupiditate id illo quis dignissimos odio, optio
          minima accusantium voluptatum at voluptate ipsa! Commodi cupiditate
          nihil, pariatur suscipit laudantium itaque harum consequatur ipsam.
          Laudantium nostrum culpa quas tempora earum quos et, nesciunt, amet
          expedita natus eum totam veritatis. Maiores neque id optio
          consequuntur reiciendis repellendus itaque minima unde. Eos
          reprehenderit cum ab mollitia. Iusto dicta neque laudantium obcaecati
          libero quam maiores cum, doloremque fugit ullam impedit. Sed expedita
          eos doloribus blanditiis corrupti fugiat, ipsam deserunt repudiandae
          facilis veritatis odio omnis architecto, numquam nemo! Natus repellat
          voluptatem iure ipsum facilis commodi ratione molestiae tempora optio,
          eius inventore eveniet repudiandae porro error at sunt unde nobis
          culpa consequuntur itaque non iste asperiores. Ex, facilis harum.
          Nostrum voluptates magnam perspiciatis sed sunt, adipisci ipsa labore
          ad quae dolores est, facere facilis quaerat optio similique in atque
          minima iste ullam omnis necessitatibus! Iure non quos fugit neque.
          Quos earum molestias repellat, aperiam est labore ex rerum
          necessitatibus maiores perspiciatis voluptate debitis illum aliquid
          veritatis rem. Quibusdam quam repudiandae itaque vero pariatur ullam
          asperiores saepe veniam iure exercitationem! Ab repellat, officia
          neque, dolor laboriosam accusamus dolores eveniet fuga doloribus ipsa,
          perspiciatis iure veniam velit nulla hic eaque itaque ipsam. Possimus
          laboriosam delectus libero ducimus odit, ullam unde iusto. Eum
          asperiores qui vel magni. Cum laudantium deserunt pariatur perferendis
          doloremque provident, voluptatibus assumenda suscipit libero quod
          dolores. Perspiciatis eius magnam dolorem laudantium quisquam
          accusamus corrupti deserunt deleniti vel error? Nemo quas debitis
          iusto nobis a facilis qui porro ratione! Facere natus hic, ratione
          odio culpa sequi quia corporis consequatur quasi vel soluta corrupti
          sapiente sit animi numquam harum tempora. Natus molestias accusamus
          quibusdam expedita, repudiandae nesciunt sapiente? Vitae dicta esse
          modi consequatur, natus mollitia fugiat ipsum molestias velit
          repudiandae voluptate! Veritatis porro atque doloremque vero veniam
          excepturi delectus non. Laudantium iusto labore quia quaerat,
          obcaecati accusantium, repellendus quasi vel iste ducimus, esse magnam
          quas possimus iure illum maxime aliquam magni! Iusto, enim culpa
          voluptatem non esse laboriosam nam sequi? Non hic incidunt quaerat
          molestiae. Atque laborum expedita magni nihil aspernatur
          exercitationem voluptates repellat, tenetur illum error ea? Sequi
          soluta voluptatem enim nobis animi libero! Animi voluptatum vel iusto
          accusantium! Quaerat architecto fuga mollitia earum, sequi laboriosam
          neque consectetur dolorem sunt quae voluptas illo quis cupiditate
          laborum nulla. Quas eos placeat facilis enim, itaque excepturi ipsum
          dolor et ullam soluta. Ipsa fugit modi unde nisi itaque totam illo
          libero ab dignissimos neque vero molestias, reiciendis laboriosam rem
          quis similique asperiores quaerat harum cumque ad dolor mollitia
          tempore quod. Saepe, architecto! Animi tenetur hic nisi labore quasi
          dolore temporibus cum voluptatum non asperiores, corrupti fuga ea
          aliquid porro, optio quia ex vitae vel voluptas, officiis amet
          architecto? Sapiente eveniet laudantium nihil? Repellat, soluta
          sapiente numquam, aspernatur eos atque cupiditate aliquid unde, quod
          nam dolor recusandae fuga! Voluptas aliquid illum quia nostrum ratione
          ducimus laborum quam deleniti quae, similique consequatur, quos saepe?
          Et, vitae! Ex vitae, repellat laborum soluta libero et ut. Fuga
          voluptatibus corrupti provident dignissimos beatae optio ea dicta
          repellat porro. Voluptatem, rerum doloremque. Alias voluptas quis
          tempore nihil inventore! Laboriosam vel unde maxime aliquam ea,
          provident placeat doloremque accusantium atque saepe quo quibusdam
          quas quaerat odio cum expedita hic nihil enim sed doloribus! Minus
          tempora sint consequuntur voluptatibus ut? Quas eligendi ea impedit
          atque laborum dolorem rem unde possimus repudiandae. Exercitationem
          minus excepturi enim dolor vitae corporis voluptas, suscipit
          accusantium vel rerum, laudantium a! Nisi voluptate porro ratione est.
          Eum dolore in maiores totam fugit, animi a eveniet sint mollitia sequi
          voluptatem cumque veritatis, beatae accusamus inventore aliquam ex
          ducimus magnam deserunt officia explicabo illum? In laborum
          repudiandae ducimus! Nisi laudantium ipsa excepturi suscipit ducimus,
          consequatur, sequi eius delectus perspiciatis laborum sed repellendus
          quos quisquam cum velit eligendi rem voluptatibus? Odio, nobis?
          Reprehenderit, possimus nihil! Repellendus optio voluptatum itaque?
          Quos id ipsum quae natus pariatur! Quibusdam aspernatur architecto,
          minima, aliquid nulla dolore itaque molestias quam neque, sapiente
          blanditiis? Facere illum nisi beatae amet earum vero dolores!
          Cupiditate, dolore iure. Illum sed, magni fugiat delectus molestiae
          maiores cumque commodi! Voluptatibus quod quibusdam veniam eos
          provident laudantium tenetur, ex, molestias natus explicabo quis
          reiciendis quae quasi consequuntur illum officiis! Voluptatem, odio?
          Perferendis numquam praesentium doloremque, nostrum expedita dolore
          vero, assumenda enim iusto asperiores, atque pariatur ea recusandae
          ipsum aliquam. Omnis ut aliquid tempora quae ducimus ea sit officia
          error recusandae quos. Animi id deserunt alias optio nostrum
          accusantium omnis qui, repellendus enim ipsam totam officiis,
          repudiandae modi blanditiis maiores ab quod esse facilis eos velit
          soluta quisquam! Atque architecto ea est! Commodi consequatur fugit
          reprehenderit temporibus natus iste ea excepturi, eligendi distinctio
          nesciunt in est dolorum dolorem alias laborum nostrum error debitis
          molestias. Quos, beatae architecto. Porro laborum vitae hic ducimus.
          Aperiam excepturi distinctio dignissimos consectetur veritatis porro
          earum, aut ducimus, voluptatum atque natus repudiandae impedit nam
          omnis. Sed tempore pariatur labore, consequuntur iusto, eligendi
          incidunt recusandae molestias laborum in molestiae. Similique, ipsam,
          consequatur aliquam molestiae nisi totam perspiciatis at fuga iste
          labore fugit ratione in suscipit nam eos dolor cum exercitationem.
          Praesentium totam quas blanditiis voluptas. Enim cupiditate animi
          minus! Praesentium, consequatur modi eveniet ullam repellendus
          laboriosam esse aperiam beatae harum ipsam autem doloremque porro
          eligendi adipisci distinctio molestiae exercitationem natus maiores
          pariatur ipsum, vel sint quaerat repellat. Qui, optio! Similique
          cupiditate pariatur impedit non, eius eligendi. Nam eaque quaerat
          reiciendis magnam itaque quo molestiae, sequi aut. Dolor ratione ipsum
          assumenda non nulla aliquam totam dolorum provident voluptas. Ipsam,
          saepe. Architecto error, sapiente impedit nostrum iure porro
          laudantium ut reprehenderit consequatur provident illo sed. Dolor id
          blanditiis facere illum et suscipit mollitia, est praesentium.
          Sapiente cumque aspernatur beatae quidem veniam.
        </div>

        {/* <div className={classes.map}>
          <div className={classes.mapContainer}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            repellat minus consequuntur dolores quaerat quo ab officia deleniti.
            Doloribus hic sapiente harum dicta fuga velit, aspernatur magnam vel
            laudantium molestiae. Aliquam magnam deserunt natus culpa
            reprehenderit facilis quibusdam delectus laborum! Error deserunt,
            cum vitae quae blanditiis quia itaque exercitationem suscipit,
            voluptatibus cumque tempore magnam delectus eum. Quas distinctio
            aliquam beatae. Dolores recusandae nam quia sed necessitatibus, eum
            expedita numquam dicta, quisquam soluta ad blanditiis repudiandae
            sint. Deserunt error eveniet beatae culpa voluptate consequuntur
            quod alias maiores, tempore ut doloribus eligendi! Tenetur, debitis.
            Veritatis beatae soluta, tempore doloribus perspiciatis expedita
            doloremque placeat dolores blanditiis illum tenetur laborum
            obcaecati est in esse. Pariatur amet omnis doloribus suscipit
            consequuntur nisi iste repudiandae quos? Consequuntur ut incidunt
            nostrum recusandae nobis cum assumenda atque vero ipsa debitis
            doloribus totam sequi, ad quidem iusto laboriosam repellat maxime
            rem. Ipsam quasi, illo nobis itaque esse rem exercitationem! Dolore
            veniam officiis delectus ratione quisquam? Repellat ad veniam cum?
            Laborum qui dolore numquam expedita veniam exercitationem tempora
            perferendis obcaecati maxime, sequi modi provident nam. Iure
            excepturi incidunt facilis doloremque! Minima aperiam aliquid
            voluptates at molestias? In suscipit reiciendis repellat placeat
            eligendi quia, culpa qui quae tempora quasi debitis eveniet. Dolore
            saepe culpa alias nesciunt nihil, ea consequuntur in repudiandae.
            Magni asperiores eos autem sapiente voluptatem, ullam quaerat
            corrupti officia ab aut facilis consequuntur voluptatibus sint quas
            nihil laudantium ut placeat! Hic ab cumque, expedita quis rerum unde
            aliquid necessitatibus! Eos, praesentium incidunt? Nihil
            voluptatibus impedit amet voluptates fugit dicta. Ad modi
            repellendus tempore saepe consequuntur, maxime porro ratione quo
            quis enim rem et. Nisi nihil totam ratione cum distinctio? Hic,
            dolorem suscipit laboriosam, laudantium in distinctio ducimus
            pariatur officia eaque, quasi autem perferendis quae excepturi
            cumque nam odit eum neque. Natus iste corrupti sunt quos ex amet,
            fugit ea? Illo maxime esse minus accusantium impedit! Odio quo illo
            ut tempore nobis! Quidem obcaecati, unde culpa aliquam assumenda
            soluta quia nam quos nobis et repellat dolorem enim reiciendis
            ducimus recusandae. Facere eos aperiam hic expedita. Distinctio cum
            sunt reprehenderit aliquid tenetur alias, similique unde dicta minus
            quod, quam sed nobis impedit odio neque voluptatem, nihil quis error
            dolorem? Doloremque, autem. Ex veniam accusamus, ea quas commodi non
            neque saepe sint culpa, laboriosam obcaecati odio! Pariatur sint
            eius excepturi labore fugit! Dolorum debitis cumque soluta
            necessitatibus atque voluptate minima earum alias. Perspiciatis
            vitae corrupti ipsa dolore quisquam fugit et ducimus officiis quos
            magnam, molestias, modi pariatur dolor. Suscipit iste quam
            exercitationem ducimus itaque, debitis amet. Laboriosam earum quam
            excepturi provident porro! Quas facilis est aperiam, cupiditate
            error ratione? Consectetur ex repudiandae expedita voluptatibus
            cupiditate nemo dignissimos molestias rem possimus tempore
            perspiciatis cum asperiores officia, id distinctio error. Nesciunt,
            quia neque? Culpa. Dignissimos nulla rerum ullam quibusdam. Laborum
            voluptatibus at enim dolorem consectetur provident libero laboriosam
            accusamus quisquam dicta perferendis aliquam iure officiis atque cum
            quam cupiditate non maiores, hic alias illum. Soluta sed tenetur
            corporis officiis, maxime nostrum porro debitis quisquam, vero
            excepturi asperiores iusto labore hic ullam exercitationem. Corrupti
            nam voluptas culpa sit voluptatem illum dolorum voluptatibus? Ea,
            eos voluptatem! Tenetur laborum aut voluptas enim molestias nemo
            dolorem quidem nisi earum nihil, quos ex corrupti expedita atque
            pariatur animi laboriosam officia nesciunt! Corrupti error magni est
            ipsa id provident cupiditate. Atque maxime corrupti, sunt iste
            delectus aut nesciunt hic iure cum, velit temporibus quos id quia
            doloribus dicta sapiente vero! Aliquam accusantium quae ducimus
            tempora maxime, doloremque sed excepturi obcaecati. Placeat suscipit
            modi quos corrupti nisi ipsam, dignissimos voluptate quisquam nihil
            itaque odit illum debitis quas adipisci aspernatur impedit assumenda
            dolorem hic facere tempore aliquid sed et quasi autem? Dolorem!
            Explicabo numquam, ea impedit quidem ex eius et nihil corporis saepe
            maxime dolorum assumenda nam? Obcaecati eius tempore, nihil illo ea
            quasi quos rem cupiditate, vitae, impedit perferendis veniam
            blanditiis? Est sit quam quae maxime vero dolorem temporibus id
            sapiente deleniti numquam doloribus, nam atque. Veniam, amet? Eum
            natus perspiciatis eveniet. Atque sunt pariatur corporis maiores
            velit vel labore commodi. Sit, dolor non expedita sunt esse
            voluptate sequi totam dolorem assumenda fugit tenetur corporis ex,
            possimus sed provident inventore explicabo ab at id. Quibusdam, quas
            assumenda quae in ad incidunt? Sint asperiores, reprehenderit
            accusamus alias corrupti deleniti quia iste saepe officia dolorem
            deserunt ipsa velit dicta aspernatur! Asperiores quasi
            exercitationem recusandae ducimus, magni possimus aspernatur iste
            nam praesentium, rem dolorem? Consequuntur fugit blanditiis eos
            dicta earum in obcaecati deleniti voluptatibus facere, perspiciatis
            maxime sint! In libero unde debitis vitae repudiandae aliquid
            necessitatibus amet recusandae iste, esse labore officiis, eligendi
            nam. Alias assumenda, libero eligendi distinctio ipsum quis
            dignissimos obcaecati, recusandae nisi nihil, delectus fugiat
            facilis laboriosam commodi repellat beatae modi totam. Nisi fuga ea
            maiores voluptate fugit aperiam necessitatibus omnis! Corporis
            dignissimos, tempore asperiores doloremque ipsum inventore quas
            explicabo esse praesentium iusto omnis tempora excepturi
            necessitatibus quidem rem eveniet. Id ex cum voluptas magni error
            porro tempora nemo consequatur quod. Labore fugit illum obcaecati
            quam ab nesciunt assumenda cum, ipsum neque voluptate vel
            recusandae, ipsa aperiam. Ducimus vel temporibus officia autem at
            odio velit perspiciatis sapiente maxime, natus, vero nobis?
            Reiciendis velit, dolorum repellat ab saepe veniam cum vitae iste
            ex! Magni corrupti eos ipsum voluptate, veniam corporis consectetur
            dolore error cum eligendi. Beatae maiores recusandae eos
            perspiciatis magnam culpa? Quis vitae ipsa, quod aperiam magnam ex
            facilis quaerat molestias libero voluptatum pariatur nisi, animi
            ipsum iusto sequi, non eveniet consequatur nihil accusantium. Sed a
            magnam ab fugiat, culpa vel. Earum vitae illo maxime doloremque quo
            tempore quisquam recusandae mollitia porro doloribus? Aut ex illum
            perferendis facilis nesciunt consequatur esse voluptates voluptas ut
            alias, molestias perspiciatis culpa hic labore nulla. Omnis beatae
            saepe illum vitae sed vel. Ea eius illo laboriosam fuga at? Eligendi
            saepe, magni quasi consequatur deleniti iusto velit, debitis
            molestias, enim temporibus voluptates mollitia similique recusandae
            eos. Ullam ea, similique accusamus magni ab minus, dignissimos
            beatae impedit numquam, iste provident accusantium voluptas commodi
            voluptate molestias! Quidem quae laborum rerum velit cumque odit
            minus, nisi quod inventore repudiandae. Dolorum maiores qui numquam
            voluptatem possimus vel laborum aliquid aut molestiae delectus.
            Voluptatum delectus, itaque nesciunt quisquam culpa quis fugit
            velit, perferendis autem, consectetur rerum tempore maiores in magni
            nulla? Quo labore id incidunt, dolorum alias tenetur eum eligendi
            veniam praesentium repudiandae rem, quaerat modi ipsam voluptate
            magnam cumque numquam voluptatum consequatur, laudantium officia
            accusantium. Tempore accusantium dicta iste corrupti? Recusandae
            autem magnam, eum consequuntur dolor cum itaque facilis distinctio
            debitis commodi sequi sint fugit nostrum mollitia. Facere aliquid
            inventore voluptatum quaerat nemo ipsum quae sequi magni odio quasi!
            A! Hic ab incidunt cumque vero distinctio praesentium in voluptatum
            error veritatis voluptas alias eos voluptate ipsum doloribus iure,
            nostrum optio placeat saepe molestias quae! Veritatis eum aut ad?
            Aliquam, corrupti. Similique tempore vero enim temporibus? Aperiam,
            aspernatur amet. Nostrum doloribus quam sed vel nesciunt mollitia
            dolore eos repellat amet placeat ipsum non rem sit, distinctio
            explicabo a libero aspernatur tempore! Libero, accusamus beatae
            distinctio corrupti pariatur impedit eos magnam illum cum nobis unde
            id amet aut omnis hic illo. Temporibus odio sunt magni? Adipisci
            natus nam soluta, alias voluptas quasi. Incidunt obcaecati fuga
            voluptatem explicabo laborum excepturi dignissimos, laudantium
            distinctio totam suscipit dolorem autem adipisci veritatis, harum
            error culpa consequuntur accusantium at impedit quidem sequi libero
            magni, aspernatur deserunt. Vitae.
          </div>
        </div>
        <div className={classes.footer}>
          <FooterOfPersonalArea />
        </div> */}
      </div>
    </>
  );
};
