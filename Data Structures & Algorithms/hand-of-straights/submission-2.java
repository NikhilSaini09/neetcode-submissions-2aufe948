class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        if(hand.length % groupSize != 0) return false;
        Arrays.sort(hand);

        Map<Integer, Integer> freq = new HashMap<>();
        for(int card : hand) {
            freq.put(card, freq.getOrDefault(card, 0) + 1);
        }

        for(int card : hand) {
            int cfreq = freq.get(card);
            if(cfreq == 0) continue;

            for(int i = 0; i < groupSize; ++i) {
                int ncard = card + i;
                int nfreq = freq.getOrDefault(ncard, 0);
                if(cfreq > nfreq) return false;
                freq.put(ncard, nfreq - cfreq);
            }
        }

        return true;
    }
}
