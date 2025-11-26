import { AboutStory } from '../../components/AboutStory';
import { TransformationProcess } from '../../components/TransformationProcess';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="our-story">
          <AboutStory />
        </section>
        
        <section id="process" className="mt-16">
          <TransformationProcess />
        </section>
      </div>
    </div>
  );
}