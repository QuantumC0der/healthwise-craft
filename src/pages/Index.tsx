import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary">
          Find Your Perfect Supplement Match
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Personalized supplement recommendations based on your health goals, lifestyle, and preferences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium">
            Take the Quiz
          </button>
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-md font-medium">
            Learn More
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-bold mb-3">Personalized Recommendations</h3>
          <p>Get supplement suggestions tailored to your unique health profile and goals.</p>
        </div>
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-bold mb-3">Science-Based Approach</h3>
          <p>All recommendations are backed by scientific research and clinical studies.</p>
        </div>
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-bold mb-3">Track Your Progress</h3>
          <p>Monitor improvements and adjust your supplement regimen as needed.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;