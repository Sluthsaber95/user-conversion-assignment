{
  function insertAfter(newNode, targetNode) {
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
  }
  var head = document.getElementsByTagName("HEAD")[0];
  var style = document.createElement("STYLE");
  style.innerHTML = `
    body {
      margin: 0;
      background: #244477;
    }
    
    @media(min-width: 0px){
      .more-info {
        font-family: "Calibre", helvetica, sans-serif;
        width: 100vw;
        padding: 40px 5vw;
        background: #FFFFFF;
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
      }
      
      .more-info__title {
        color: #364B52;
        display: block;
        margin: 0;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
      }

      .more-info__decor-line {
        display: none;
        background: #4CB6F2;
        height: 3px;
        width: 25px;
        margin: 10px 0;
      }

      .more-info__container {
        display: flex;
        justify-content: unset;
        align-items: center;
        flex-direction: column;
      }

      .more-info__paragraph {
        padding: 20px 50px 40px 50px;
        font-size: 17px;
        letter-spacing: 0.8px;
        font-weight: 300;
        line-height: 1.5em;
        color: #000000;
      }

      .more-info__cta {
        background: #4CB6F2;
        border: 0px solid #fff;
        color: #fff;
        padding: 15px 40px;
        text-transform: uppercase;
        font-weight: 700;
      }

      .btn {
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
      }

      .btn:focus {
        outline: none;
      }

      .btn-utc2 {
        display: block;
        color: #fff;
        background: #2AB4EE;
        border-color: #2AB4EE;
        box-shadow: none;
        padding: 15px 40px;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
      }
      
      .btn-utc2:hover {
        background: 0 0;
        border: 1px solid #2AB4EE;
        color: #2AB4EE;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      .more-info__btn--margin {
        display: flex;
      }

      .display--inline {
        display: inline;
      }

      .display--flex {
        display: flex;
      }

      .margin-btn {
        margin: 0;
      }
    }

    @media(min-width: 768px){
      .more-info {
        display: block;
        flex-direction: unset;
        font-family: "Calibre", helvetica, sans-serif;
        width: 100vw;
        padding: 40px 5vw;
      }
      
      .more-info__title {
        color: #364B52;
        display: block;
        margin: 0;
        font-weight: 600;
        text-align: left;
        text-transform: uppercase;
      }

      .more-info__decor-line {
        display: block;
        background: #4CB6F2;
        height: 3px;
        width: 25px;
        margin: 10px 0;
      }
      
      .more-info__container {
        
        display: flex;
        justify-content: space-between;
        align-items: unset;
        flex-direction: unset;
      }

      .more-info__paragraph {
        padding: 0;
        font-size: 17px;
        letter-spacing: 0.8px;
        font-weight: 300;
        line-height: 1.5em;
        color: #000000;
      }

      .more-info__cta {
        background: #4CB6F2;
        border: 0px solid #fff;
        color: #fff;
        padding: 15px 40px;
        text-transform: uppercase;
        font-weight: 700;
      }

      .btn {
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
      }

      .btn:focus {
        outline: none;
      }

      .btn-utc2 {
        display: block;
        color: #fff;
        background: #2AB4EE;
        border-color: #2AB4EE;
        box-shadow: none;
        padding: 15px 40px;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
      }
      
      .btn-utc2:hover {
        background: 0 0;
        border: 1px solid #2AB4EE;
        color: #2AB4EE;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      .more-info__btn--margin {
        display: flex;
      }

      .display--inline {
        display: inline;
      }

      .display--flex {
        display: flex;
      }

      .margin-btn {
        margin-left: 40px;
      }
    }

    @media(min-width: 1200px){
      .more-info {
        width: 82vw;
        padding: 20px 12vw;
        bottom: 100px
      }
    }
  `;
  head.appendChild(style);

  // Target Initial Section
  var body = document.getElementsByTagName("body")[0];
  var node = document.createElement("SECTION");
  node.className = "more-info";
  node.id += "more-info";

  node.innerHTML = `
    <div class="more-info__title" > Interested in our free audit ?</div >
    <div class="more-info__decor-line"></div>
    <div class="more-info__container">
      <div class="more-info__paragraph">
        We review your data configuration, look opportunities or red flags within your GA account, and experience talent skill set alongside of other A/B tests we've run make immediate recommendations that are backed by data and are actionable - all packed within a 30 minute video
      </div>
      <div>
        <button class="btn btn-utc2 margin-btn">find out more</button>
      </div>
    </div>
  `;
  body.appendChild(node)
}
