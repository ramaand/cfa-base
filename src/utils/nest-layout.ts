export const nestLayout = (parent: any, child: any) => (page: any) =>
  parent(child(page));
