const createDot = () => {
  const dot = document.createElement('div');
  dot.classList.add('none', 'md-block', 'dot', 'bg-color-primary', 'm-left-20');
  return dot;
};

const createTag = (title) => {
  const tag = document.createElement('div');
  tag.classList.add('regular', 'main-tag');
  tag.textContent = title;
  return tag;
};

const createTechTag = (title) => {
  const techTag = document.createElement('div');
  techTag.classList.add('bg-color-primary', 'fit-content', 'tag', 'm-right-20', 'm-top-20', 'p-10');
  const tagTitle = document.createElement('span');
  tagTitle.textContent = title;
  techTag.appendChild(tagTitle);
  return techTag;
};

const createLink = (url, text) => {
  const link = document.createElement('a');
  link.classList.add('m-right-20');
  link.href = url;
  link.rel = 'noopener noreferrer';
  link.target = '_blank';
  const content = document.createElement('div');
  content.classList.add('bg-color-primary', 'tag', 'p-10', 'regular', 'm-top-20');
  content.textContent = text;
  link.appendChild(content);
  return link;
};

const createItem = (element, inverse = false) => {
  const {
    imgUrl, contentTitle, tagsInfo, desc, techTagsInfo, linksInfo,
  } = element;
  const item = document.createElement('div');
  item.classList.add('p-x-20', 'md-flex', 'space-between', 'm-top-100');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('content', 'bg-color-primary', 'hidden-overflow');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container', 'flex', 'align-center', 'relative');
  if (imgUrl !== '') {
    const img = document.createElement('img');
    img.classList.add('img', 'absolute');
    img.src = imgUrl;
    imageContainer.appendChild(img);
  }
  imageWrapper.appendChild(imageContainer);

  const content = document.createElement('div');
  content.classList.add('content', 'p-x-40', 'right-border', 'bottom-border', 'p-y-20', 'bg-color-secondary');
  const title = document.createElement('p');
  title.classList.add('x-large', 'm-top-20', 'extra-bold');
  title.textContent = contentTitle;

  const tags = document.createElement('div');
  tags.classList.add('md-flex', 'align-center', 'm-top-20');
  for (let i = 0; i < tagsInfo.length; i += 1) {
    const tag = createTag(tagsInfo[i]);
    const dot = createDot();
    tags.appendChild(tag);
    if (i !== tagsInfo.length - 1) tags.appendChild(dot);
  }

  const description = document.createElement('p');
  description.classList.add('m-top-20', 'regular', 'medium');
  description.textContent = desc;

  const techTags = document.createElement('div');
  techTags.classList.add('flex', 'wrap');
  for (let i = 0; i < techTagsInfo.length; i += 1) {
    const techTag = createTechTag(techTagsInfo[i]);
    techTags.appendChild(techTag);
  }

  const links = document.createElement('div');
  links.classList.add('flex', 'wrap');
  for (let i = 0; i < linksInfo.length; i += 1) {
    const { url, text } = linksInfo[i];
    const link = createLink(url, text);
    links.appendChild(link);
  }

  content.appendChild(title);
  content.appendChild(tags);
  content.appendChild(description);
  content.appendChild(techTags);
  content.appendChild(links);

  if (inverse) {
    item.appendChild(content);
    item.appendChild(imageWrapper);
  } else {
    item.appendChild(imageWrapper);
    item.appendChild(content);
  }

  return item;
};

export default createItem;
