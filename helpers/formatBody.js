import xss from "xss";

import layoutStyles from "../styles/layout/Layout.module.scss";
import baseStyles from "../styles/base/Base.module.scss";

export default function formatBody(bodyContent) {
  const bodyFormatted = bodyContent.replace(/<time.*time>/g, "");
  const bodyAtomTag = bodyFormatted.replace(/<gu-atom.*gu-atom> /g, "");
  const bodySanitized = xss(bodyAtomTag);
  const bodyFigure = bodySanitized.replace(
    /<figure/g,
    `<figure class="${layoutStyles["article__figure"]}"`
  );
  const bodyImage = bodyFigure.replace(
    /<img/g,
    `<img class="${layoutStyles["article__image"]}"`
  );
  const bodyImageCaption = bodyImage.replace(
    /<figcaption/g,
    `<figcaption class="${baseStyles["caption--grey"]}"`
  );
  const bodyImageSize = bodyImageCaption.replace(
    /width="\d*"|height="\d*"/g,
    ""
  );
  const bodyParsed = bodyImageSize.replace(
    /<p>/g,
    `<p class="${layoutStyles["article__paragraph"]}">`
  );
  return bodyParsed;
}
