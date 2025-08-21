import SideMenu from 'apps/web/src/SideMenu';
import '../globals.css';

export default function Layout(
  { children } : { children: React.ReactNode }
) {
  return (
    <main className={`dark text-foreground bg-background flex`} >
      <SideMenu />
      <section className="w-screen bg-secondary/10 overflow-scroll flex flex-col" >
        {children}
      </section>
    </main>
  );
}
