export default function TableOfContents({ tableOfContents }: any) {
  const items: any[] = tableOfContents.filter(
      (item: any) => item.level === 1 || item.level === 2 || item.level === 3
  );

  return (
      <div className="p-8 space-y-4">
          <div className="text-2xl font-semibold">Contenido</div>
          <ul className="pl-2 space-y-2 list-disc list-inside text-blue-500">
              {items.map((item) => {
                  const href = `#${item.title}`;
                  return (
                      <li
                          key={item.title}
                      >
                          <a href={href}>
                              {item.title}
                          </a>
                      </li>
                  );
              })}
          </ul>
      </div>
  )
}