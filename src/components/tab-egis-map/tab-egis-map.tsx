import React from "react";

import { ButtonMobilePanel } from "./components/button-mobile-panel";
import { useStyles } from "./styles";
import "./index.css";
import { useDisplayStatus } from "../../hooks/use-display-status";
import { FooterOfPersonalArea } from "../footer-of-personal-area";

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
        </div>
      </div>
    </>
  );
};
