{
  function insertAfter(newNode, targetNode) {
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
  }
  // Inject  CSS via <Style> Tag
  var head = document.getElementsByTagName("HEAD")[0];
  var style = document.createElement("STYLE");
  style.innerHTML = `
    @media(min-width: 0px){
      .blog {
        font-family: "Calibre", helvetica,sans-serif;
        text-transform: uppercase;
        background: #EFF2F5;
        height: 1300px;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .blog-wrapper {
        background: transparent; 
      }

      .blog--inner {
        width: 90%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }

      .blog-container {
        margin-bottom: 30px;
      }

      .blog__card-container {
        display: flex;
      }

      .blog-post-title {
        font-size: 21px;
        color: #384C5C;
        font-weight: 600;
        margin: 10px 0;
      }

      .blog__card {
        width: 354px;
        height: 348px;
        background: #FFFFFF;
        padding: 30px;
      }

      .blog__card-date {
        font-size: 17px;
        font-weight: 600;
        margin: 5px 0;
        font: #000000;
      }

      .blog__card-author {
        font-size: 17px;
        font-weight: 400;
        margin-bottom: 80px;
        color: #43555C;
      }

      .blog__card-title {
        font-size: 26px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #44B5ED;
      }

      .blog__card-decor-line {
      background: #D6DEE2;
      height: 2px;
      width: 100%;
      margin-bottom: 12px;
      }

      .blog__card-types {
        display: flex;
      }

      .blog__card-types__tag {
        font-size: 18px;
        font-weight: 700;
        color: #CFD3D5;
      }

      .circle-decor {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
      }
      .circle-decor--inner {
        background: #CFD3D5;
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
    }

    @media(min-width: 1200px){
      .blog {
        font-family: "Calibre", helvetica,sans-serif;
        text-transform: uppercase;
        background: #EFF2F5;
        height: 500px;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .blog-wrapper {
        width: 1100px;
        background: transparent;
      }
      .blog--inner {
        width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-direction: unset;
      }
      
      .blog-container {
        margin-bottom: 30px;
      }
      
      .blog__card-container {
        display: flex;
      }
      
      .blog-post-title {
        font-size: 21px;
        color: #384C5C;
        font-weight: 600;
        margin: 10px 0;
      }
      
      .blog__card {
        width: 354px;
        height: 348px;
        background: #FFFFFF;
        padding: 30px;
      }
      
      .blog__card-date {
        font-size: 17px;
        font-weight: 600;
        margin: 5px 0;
        font: #000000;
      }
      
      .blog__card-author {
        font-size: 17px;
        font-weight: 400;
        margin-bottom: 80px;
        color: #43555C;
      }
      
      .blog__card-title {
        font-size: 26px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #44B5ED;
      }
      
      .blog__card-decor-line {
        background: #D6DEE2;
        height: 2px;
        width: 100%;
        margin-bottom: 20px;
      }
      
      .blog__card-types {
        display: flex;
      }
      
      .blog__card-types__tag {
        font-size: 18px;
        font-weight: 700;
        color: #CFD3D5;
      }
      
      .circle-decor {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
      }
      .circle-decor--inner {
        background: #CFD3D5;
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
    }
  `;
  head.appendChild(style);

  // Target Initial Section
  var sectionTarget = document.getElementById("homepage-splash");
  var node = document.createElement("SECTION");
  node.id += "blog-posts";

  // Insertion of HTML
  insertAfter(node, sectionTarget);
  node.innerHTML = `
    <section id="blog-posts" class="blog">
      <section class="blog-wrapper">
        <div class="blog-post-title">Recent Blog Posts:</div>
        <article class="blog--inner">
          <section class="blog-container">
            <article class="blog__card">
              <div class="blog__card-date">14 / 04 / 2018</div>
              <div class="blog__card-author">Olivia gruetter</div>
              <div class="blog__card-title">moderated user testing newbie: what I learnt</div>
              <div class="blog__card-decor-line"></div>
              <article class="blog__card-types">
                <div class="blog__card-types__tag">strategy</div>
                <div class="circle-decor">
                  <div class="circle-decor--inner"></div>
                </div>
                <div class="blog__card-types__tag">us</div>
              </article>
            <article>
          </section>
          <section class="blog-container">
            <article class="blog__card">
              <div class="blog__card-date">06 / 04 / 2018</div>
              <div class="blog__card-author">Damian Dawber</div>
              <div class="blog__card-title">on creating a/b tests (properly!) - by a developer</div>
              <div class="blog__card-decor-line"></div>
              <article class="blog__card-types">
                <div class="blog__card-types__tag">development</div>
              </article>
            <article>
          </section>
          <section class="blog-container">
            <article class="blog__card">
              <div class="blog__card-date">30 / 03 / 2018</div>
              <div class="blog__card-author">Preston Daniel</div>
              <div class="blog__card-title">improving activation with personalisation: ga + fullstory + gym</div>
              <div class="blog__card-decor-line"></div>
              <article class="blog__card-types">
                <div class="blog__card-types__tag">usertest.io</div>
              </article>
            <article>
          </section>
        </article>
      </section>
    </section>
  `;
}