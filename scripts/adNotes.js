class AdNotes {
    constructor() {
        this.modal = document.getElementById('adNotesModal');
    }

    showNotes(adId) {
        const ad = this.getAdData(adId);
        const notesHtml = `
            <div class="notes-section">
                <h4 class="font-medium mb-2">Ad Structure</h4>
                <div class="space-y-2">
                    <div class="flex">
                        <span class="font-medium w-24">Hook Type:</span>
                        <span>${ad.structure.hook.type}</span>
                    </div>
                    <div class="flex">
                        <span class="font-medium w-24">Pattern:</span>
                        <span>${ad.structure.pattern}</span>
                    </div>
                    <div class="flex">
                        <span class="font-medium w-24">Call to Action:</span>
                        <span>${ad.structure.cta}</span>
                    </div>
                </div>
                
                <h4 class="font-medium mt-4 mb-2">Performance Notes</h4>
                <div class="space-y-2">
                    <div class="flex">
                        <span class="font-medium w-24">CVR:</span>
                        <span>${ad.performance.cvr}%</span>
                    </div>
                    <div class="flex">
                        <span class="font-medium w-24">Best For:</span>
                        <span>${ad.performance.bestFor.join(', ')}</span>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('adNotesContent').innerHTML = notesHtml;
        this.modal.classList.add('active');
    }

    getAdData(adId) {
        // This would typically fetch from an API or database
        return {
            structure: {
                hook: {
                    type: "Problem-Solution",
                    variation: "Pain Point Focus"
                },
                pattern: "PAS (Problem-Agitate-Solution)",
                cta: "Soft Call + Urgency"
            },
            performance: {
                cvr: 4.8,
                bestFor: ["B2B", "SaaS", "Lead Generation"],
                targetAudience: "Decision Makers"
            }
        };
    }

    close() {
        this.modal.classList.remove('active');
    }
}

const adNotes = new AdNotes();
