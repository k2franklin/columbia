import { getMetadata } from '../../scripts/lib-franklin.js';


/**
 * decorates the offer
 * @param {Element} block The offer block element
 */
export default async function decorate(block) {
  // fetch nav content
  const offerMeta = getMetadata('offers');
  const offerPath = offerMeta ? new URL(offerMeta).pathname : '/offers';
  const resp = await fetch(`${offerPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();
    console.log(html);
    // decorate offer DOM
    block.innerHTML= html;
  }
}
