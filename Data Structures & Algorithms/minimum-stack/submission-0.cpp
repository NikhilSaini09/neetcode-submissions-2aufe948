class MinStack {
    stack<pair<int, int>> st;
public:
    MinStack() {}
    
    void push(int val) {
        int lastMin = st.empty() ? INT_MAX : st.top().second;

        st.push({val, min(lastMin, val)});
    }
    
    void pop() {
        st.pop();
    }
    
    int top() {
        return st.top().first;
    }
    
    int getMin() {
        return st.top().second;
    }
};
