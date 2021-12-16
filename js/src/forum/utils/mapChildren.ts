import Mithril from "mithril";

export default function mapChildren(item: Mithril.Vnode<Mithril.Attributes>, callback: (item: Mithril.Vnode<Mithril.Attributes>) => Mithril.Vnode<Mithril.Attributes>) {
  const children = (item?.children as Array<Mithril.Vnode<Mithril.Attributes>>);

  if (children instanceof Array && "map" in children) {
    item.children = children?.map(callback).map(item => {
      return ((item?.children as Array<Mithril.Vnode<Mithril.Attributes>> || null)?.length && mapChildren(item, callback)) || item;
    });
  }

  return item;
};
