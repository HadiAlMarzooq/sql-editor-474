import create from 'zustand';

const useStore = create(set => ({
  results: null,
  error: null,
  setResults: (results) => set({ results }),
  setError: (error) => set({ error }),
}));

export default useStore;