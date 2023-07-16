interface ReactNode {
  children: React.ReactNode
}
import './home.css'
function Index({ children }: ReactNode) {
  return (
    <main>
      {children}
    </main>
  );
}

export default Index;
