import { Container } from "components/common/container";
import { Box_icon_social_container } from "../../components/box_icon_social";
import { SliderContainer } from "../../components/slider/SliderContainer";
import { sliderData, sliderCategory } from "../../components/slider/mockData";
import { newsData } from "./news/mockData";
import { SeparatorContainer } from "../../components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";

const HomeContainer = () => {
  return (
    <>
      <Container className="wrapper" el="section">
        <div>
          <Box_icon_social_container />
        </div>
      </Container>
      <SliderContainer items={sliderData.items} theme={"home"} />
      <SeparatorContainer title={"О нас"} />
      <AboutContainer />
      <SeparatorContainer title={"Категория продукции"} />
      <SliderContainer
        items={sliderCategory.items}
        dots={true}
        autoplay={false}
        theme={"homecategory"}
      />
      <SeparatorContainer title={"Новости"} />
      <NewsContainer props={newsData} />
      <Container className="wrapper" el="section">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          provident incidunt corporis soluta ab amet est sed impedit esse
          consectetur! Esse eveniet error doloribus aliquam repellat commodi
          repellendus asperiores labore cupiditate, assumenda minima quisquam!
          Vel ipsam alias nam quae a nesciunt impedit, officia est explicabo
          facilis blanditiis voluptatum numquam quisquam atque veniam distinctio
          quibusdam! Corrupti eius repudiandae blanditiis earum aliquam culpa
          aut rem perferendis voluptatum eveniet eos modi temporibus tempore,
          ullam error omnis magnam distinctio possimus nesciunt officiis velit
          expedita nisi commodi quidem. Natus numquam nam, facilis expedita
          commodi vel ipsam possimus, dolorem ipsum, quibusdam odit optio
          doloremque quaerat deserunt nobis nemo modi repellendus alias
          perferendis minima voluptatum iusto amet pariatur laudantium.
          Voluptatibus provident sapiente suscipit est non, dolorum neque
          voluptatem modi veritatis, ipsum quis maxime sequi tempora facere,
          cupiditate delectus! Suscipit soluta assumenda neque facere veritatis
          rem a quisquam unde. Necessitatibus doloremque excepturi hic deleniti
          assumenda, eligendi ab et ea nemo facere voluptates magnam explicabo
          qui odit. Recusandae non corrupti veniam sed minima commodi facilis,
          deserunt totam aperiam rerum aliquid aspernatur exercitationem culpa
          beatae sit libero consequuntur accusantium. Enim molestiae, quasi
          iusto ab sequi aliquid sed dolor dolorem pariatur molestias minus.
          Explicabo, sed iure nulla fugit quibusdam nostrum suscipit odio sit?
          Blanditiis nesciunt ipsum alias. Voluptatibus id nihil nulla minus,
          quo voluptates labore assumenda placeat architecto eligendi, et a
          commodi ipsam earum necessitatibus laboriosam illo fuga quibusdam
          excepturi blanditiis ab sit sequi aut. Laboriosam magni delectus modi
          similique quo nostrum? Obcaecati tenetur ea molestiae, corporis
          suscipit numquam assumenda laboriosam deleniti repellat? Provident at,
          magnam repudiandae sint esse doloremque. Ducimus adipisci nulla,
          repellat quisquam consequatur doloremque impedit ratione repellendus
          sed quasi nobis. Exercitationem nisi blanditiis temporibus nemo
          sapiente mollitia doloribus ab, dolor molestiae, minima laudantium
          dolorem optio! Ducimus, inventore iure unde delectus autem repellat
          nostrum vero adipisci voluptate, consectetur quam molestiae. Ipsa
          commodi, nobis temporibus magni quae amet tenetur architecto.
          Corporis, nemo amet dolorum repudiandae doloremque enim nisi quasi
          ullam tempore nobis? Quasi eaque repellat nisi corporis libero animi
          quia cupiditate nostrum culpa repellendus hic provident rem eveniet
          placeat, obcaecati illum nesciunt veritatis velit perferendis neque
          maxime beatae consequatur saepe earum? Eum numquam culpa voluptatibus
          repudiandae modi vitae, omnis quos quibusdam ut odio adipisci magni,
          velit quasi, dolores ipsa blanditiis maxime autem ex! Voluptatum autem
          sint soluta eum repudiandae unde aliquam culpa doloribus perferendis
          accusamus sed quia, assumenda maxime laudantium dolor laboriosam
          commodi! Tempore eos ad, labore cupiditate cum totam provident? Minima
          temporibus tempora voluptatum aspernatur! Magni voluptates rerum ullam
          sint cum dolores inventore. Harum totam incidunt reprehenderit
          reiciendis quia, sequi iure aperiam suscipit quod rerum nihil
          exercitationem et minus id voluptatibus expedita neque officiis iusto
          eaque voluptates nemo! Omnis excepturi voluptas dolorum deleniti modi
          voluptatibus iste, nobis consequatur, doloribus animi sint debitis cum
          quasi eaque officia doloremque quia tenetur sit magni harum voluptatum
          fuga fugit earum dignissimos? Possimus incidunt quo rem necessitatibus
          beatae a labore consequuntur esse at illo fugit, deserunt doloribus!
          Cum, blanditiis velit, ea aliquid maiores repudiandae necessitatibus
          dolor atque rerum suscipit in itaque numquam? In id nemo natus ipsa
          repellendus quibusdam, rem fugit, nobis deserunt mollitia laborum
          doloremque vitae dicta laudantium dolorum inventore atque hic neque
          vel doloribus. Molestiae assumenda nostrum illum. Ea esse expedita
          quae perferendis ipsam excepturi asperiores? Id impedit totam
          necessitatibus nemo voluptate, quos soluta, alias fugiat consectetur
          libero eos molestias, voluptatem vitae debitis iusto incidunt minima
          nostrum labore hic doloribus et. Doloribus autem fugiat quidem magni
          temporibus laborum tenetur officia tempora fugit. Fugit, eius
          excepturi alias sequi dolore nostrum dolorum rem ipsum aliquam
          voluptate in neque qui ex commodi! Temporibus reiciendis dolorem
          maiores atque error pariatur incidunt deserunt cumque odit, veritatis
          quae hic iste delectus, minus voluptates cum fugit alias voluptatem
          aut nisi possimus dignissimos laudantium quibusdam obcaecati. Porro
          rerum quasi blanditiis suscipit ullam deleniti, excepturi earum,
          eveniet quo esse voluptate iste libero! Et hic nam consequatur,
          reprehenderit asperiores alias aperiam repellendus veniam officia a,
          fuga culpa sed voluptates architecto sequi rem. Tempore temporibus
          aliquam, itaque ad, molestiae facilis porro, sunt tenetur consectetur
          quod quas possimus voluptas modi! Sit dolore molestias magni debitis
          dolor maiores dolores accusantium a tempora aspernatur tenetur,
          officiis nulla alias minus illo commodi inventore quia molestiae
          assumenda fugiat odit ipsa. Consectetur earum vero sequi asperiores
          exercitationem ut sed perspiciatis minus, impedit beatae repudiandae
          maxime fugit cupiditate accusantium nulla dolores commodi reiciendis
          corporis possimus deserunt expedita! Sit fugit ipsa maiores eaque
          minus atque nihil, fugiat pariatur officia tenetur provident molestiae
          nesciunt voluptas eius recusandae dolore animi veritatis ea?
          Perspiciatis voluptates quam nulla, harum maiores, aliquam consequatur
          suscipit quos animi praesentium hic quidem id odit corporis recusandae
          autem doloribus voluptate nesciunt dolor, earum molestiae voluptatem.
          Quidem odio voluptatibus perferendis neque vero suscipit ipsum labore
          saepe ullam incidunt optio quibusdam officia cum est fugit quisquam a,
          provident dolore tempore repellat. Consequatur dolore cumque dicta
          voluptatum dolorum laborum optio suscipit, doloremque blanditiis
          eveniet quis. Perspiciatis commodi quia sed, dolor neque magni labore
          animi laborum quidem, repudiandae, ratione ducimus quibusdam. Nulla
          sunt repellat itaque quasi asperiores totam tempore eveniet dolor,
          quis illo porro placeat ab, numquam distinctio a nostrum aut
          reiciendis dicta! Veniam impedit eius maiores. Odit, quaerat error,
          ipsam tempore eveniet perferendis nemo ex libero facere, consequatur
          quidem eius exercitationem nesciunt rem consequuntur? Tempore,
          corporis fugit. Repellat eaque delectus voluptates? Sequi dolor
          deleniti facere tempore quo esse sed, porro ad! Facilis dolores dolore
          consequatur ipsum eligendi, asperiores, dicta cumque laudantium optio
          harum nam magnam sapiente non magni quae architecto inventore debitis
          quod quis nulla rerum. Assumenda nulla explicabo maiores nemo esse
          libero delectus facilis tempora, voluptatibus veritatis aut molestiae
          dignissimos minima vero voluptatum distinctio at autem eligendi a,
          neque non nostrum! Libero obcaecati corporis delectus aliquid
          praesentium. Tempore voluptatem exercitationem non veritatis facere
          provident, hic temporibus itaque cum aliquid expedita ducimus neque
          deleniti vero quo, eveniet mollitia possimus autem distinctio
          assumenda quidem ipsam inventore eaque! Soluta distinctio, neque earum
          laudantium enim cum nihil quibusdam quae odit alias reiciendis fuga
          atque quo culpa nobis dolore minus asperiores suscipit dolores
          temporibus error excepturi fugiat inventore. Minus ut, sunt optio
          voluptate, quas consequatur, eius accusamus molestiae ducimus dolor
          expedita velit aliquam maxime doloribus voluptatibus reiciendis
          deleniti. Officiis esse temporibus dolore exercitationem incidunt iure
          sunt optio quod eos molestiae dolores dicta omnis doloribus voluptas
          consectetur debitis, aspernatur facilis animi distinctio sapiente! Est
          corrupti tempora eaque dignissimos esse nostrum dolore, qui cumque, in
          ad non quos eos exercitationem laudantium. Illo quidem sint tenetur,
          quo a alias excepturi ab necessitatibus reiciendis atque quod. Error,
          maxime beatae! Adipisci enim ex error eum voluptatum nostrum culpa
          itaque veniam soluta vero, ducimus repellat eius omnis cupiditate?
          Aliquid, voluptas harum. Sunt explicabo amet labore asperiores qui
          quis obcaecati animi nemo eum ad. Amet inventore quidem ut eveniet
          incidunt quis beatae maxime eligendi consectetur nobis tempore
          nesciunt tempora possimus enim, porro rem unde labore debitis ratione
          aliquid? Sapiente, quasi fugiat. Animi quia natus aperiam, dolorem
          totam ea exercitationem accusantium consequuntur nemo cupiditate,
          temporibus quisquam corporis dicta repellendus dignissimos, unde
          officia enim saepe? Expedita odio odit non cum sunt inventore
          distinctio officia voluptatem aliquam esse laboriosam, in soluta ipsum
          architecto placeat. Quas eveniet sed incidunt rem aut molestias
          excepturi, architecto ducimus assumenda consectetur, quos quisquam
          quidem libero mollitia. Velit ullam esse quibusdam nostrum ex nulla.
          Et suscipit, voluptatibus eligendi eveniet minima praesentium incidunt
          ipsam laborum at corrupti, laudantium eaque alias architecto provident
          ea eos labore cumque, nobis porro. Natus quasi soluta dolorum animi
          mollitia. Quam veritatis eius suscipit atque corporis voluptatum
          maiores nihil quasi itaque est dolorem dolor hic obcaecati quaerat,
          repudiandae culpa quos autem, corrupti nemo nam. Minus nobis possimus
          vero quas ipsa alias esse nam, voluptas doloremque accusamus a
          officiis iure repudiandae minima porro quo corrupti cum nisi, sit,
          recusandae sed perspiciatis earum. Nobis ab laboriosam, iure, sed
          perspiciatis quod quas architecto odio odit libero deserunt excepturi!
          Maiores veniam tempora cumque soluta, autem repudiandae sequi placeat
          delectus architecto officiis perferendis, distinctio quidem at
          inventore. Dolorum ducimus nisi pariatur sit? Reprehenderit,
          perferendis eos repudiandae, debitis culpa eius animi at inventore
          impedit dicta quo? Consequuntur, quibusdam ratione expedita eos
          commodi debitis architecto maiores facere adipisci blanditiis
          asperiores ullam, earum nisi ad, praesentium aspernatur laudantium
          vero harum iusto exercitationem dolor quidem? Maiores dolore expedita
          odio, quis illo nam odit sit alias animi dolores deleniti consequuntur
          cum repudiandae obcaecati in tenetur assumenda laudantium aut, saepe
          modi, perferendis omnis eveniet ipsa! Ea id ex nisi, blanditiis cum
          quasi consectetur vel esse error temporibus? Quos totam culpa qui,
          magni aperiam accusantium tempora explicabo modi quam molestiae omnis
          voluptates dolores illo tempore. Id vero cumque voluptates natus
          possimus et saepe soluta veritatis nobis consequuntur dicta ducimus
          suscipit vel iste maiores, perferendis optio nam exercitationem quasi?
          Corrupti ipsam nam minima earum sint quo saepe aspernatur enim
          praesentium odio. Sequi doloribus animi quas rem illo dolore aliquid
          nesciunt. Ex, earum corporis, quod ratione perspiciatis molestiae
          laboriosam atque officiis quidem harum obcaecati deserunt consectetur
          est excepturi sint veniam. Cupiditate praesentium est minima magni ad
          ea quam. Nobis, quasi similique recusandae adipisci architecto beatae
          a voluptatem placeat dolore fuga fugiat, eaque sapiente qui ad ducimus
          corrupti quo! Maiores veritatis quidem accusantium quaerat laboriosam.
          Ipsa quia inventore provident unde minima eveniet impedit, magni
          molestias excepturi nulla, reprehenderit mollitia labore ea saepe sed
          voluptatibus obcaecati optio pariatur ullam. Assumenda ipsa, eius
          quibusdam alias recusandae inventore, adipisci rerum aut cumque minus
          illo maxime error, sed nesciunt ut ab incidunt repellat eos iste
          asperiores repellendus tenetur dignissimos magni. Maiores suscipit
          officiis modi ea laborum soluta deserunt dignissimos vitae iusto.
          Commodi illum deleniti veniam, possimus delectus ipsum vero provident
          expedita minima similique excepturi accusantium quae eligendi dolore
          vel harum accusamus quidem fuga libero. Dolor dolorem corporis maiores
          earum animi ipsam odit pariatur ab illum quam, in voluptatum sit
          cupiditate necessitatibus expedita quos consequuntur beatae ut nam
          consectetur numquam harum. Nam commodi tempore repellendus minima?
          Aliquam explicabo quaerat ut modi placeat possimus quibusdam molestias
          hic ipsa pariatur suscipit, aperiam voluptatum, eveniet quo nulla
          facere necessitatibus fugiat! Voluptas at consequuntur consequatur
          odio. Possimus eaque numquam expedita id quisquam. Veritatis maiores
          quaerat soluta aliquid, hic, deleniti facere totam neque nulla at
          error, itaque quidem quibusdam quos! Earum autem similique enim,
          voluptas, rerum aperiam reprehenderit deserunt, aspernatur dignissimos
          quia error tempora. Exercitationem sunt quo numquam porro eos vel
          impedit incidunt veniam. Dignissimos corrupti debitis beatae sapiente
          obcaecati cumque voluptates minus voluptatibus? Pariatur delectus
          dicta maiores vel odio aliquid similique, impedit reprehenderit ad
          dolor earum libero ex architecto illo, consequuntur rerum mollitia
          consequatur iure! Ab voluptatum voluptate dolor minima amet
          consequuntur eveniet mollitia, tempore, cumque dolorem placeat
          aspernatur natus et nisi ex alias cupiditate quo. Veniam
          exercitationem ipsam quasi! Quae ex architecto odit non, repellat
          doloribus officia expedita porro illum pariatur eveniet et, delectus
          laboriosam itaque voluptatibus reiciendis animi numquam vitae
          cupiditate deleniti dolorum debitis. Ratione delectus sunt debitis
          quaerat a neque, unde ad minus dolorem, quo praesentium sint,
          temporibus earum voluptatem repellendus? Quis, aperiam amet! Dolor
          aliquam nobis tempora soluta quasi modi repellat? Fugiat voluptate est
          illo qui soluta officiis harum, excepturi quia magni? Consequatur
          maxime quo iste exercitationem accusamus corrupti voluptates nisi
          voluptatem dolorum consectetur dolor, ratione, inventore vel officia.
          Commodi sint blanditiis asperiores labore? Perspiciatis deleniti error
          quis id placeat, quaerat temporibus, accusamus illo iusto ad ullam.
          Voluptas vel officiis nobis molestias laborum quaerat sunt earum quas
          incidunt minima, suscipit itaque dolore error quos doloremque neque.
          Eos, nulla, optio quasi minus odit, cupiditate voluptate ratione
          maxime est officiis delectus voluptates facilis. Sapiente debitis fuga
          quod corrupti eveniet officia, tenetur provident, mollitia vitae nemo
          asperiores tempore qui quae voluptas saepe repellendus incidunt
          exercitationem rerum sed aspernatur optio atque blanditiis dolores.
          Rem, perferendis. Assumenda sit doloribus, officia natus animi minima
          vero quasi sunt aperiam sapiente adipisci. In nisi deserunt suscipit,
          laborum ea quisquam modi nemo recusandae iure, possimus tempore alias
          exercitationem libero. Eum consequatur mollitia iusto excepturi
          nostrum recusandae minima, eius odit odio perferendis maiores tempore
          pariatur libero. Deserunt unde ex similique, enim consequatur
          explicabo vitae deleniti sit porro optio rerum adipisci, alias aut
          ipsam dolores numquam minus? Inventore eaque porro, laudantium
          deserunt sunt a voluptatem ratione, provident tenetur ex repellendus
          tempore accusantium molestiae sapiente facere quia non vitae est!
          Voluptate, quia?
        </h1>
      </Container>
    </>
  );
};
export { HomeContainer };
