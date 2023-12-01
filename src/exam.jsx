1. find the occurrence of an element X in the given array
#include <iostream>
using namespace std;

void linear(int n, int arr[], int k) {
    int st = 0;
    int en = n - 1;
    while (st <= en) {
        int mid = (st + en) / 2;
        if (arr[mid] == k) {
            cout << mid;
            return;
        } else if (arr[mid] > k) {
            en = mid - 1;
        } else {
            st = mid + 1;
        }
    }
    cout << "NO OCCURRENCES";
}

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int a;
    cin >> a;
    linear(n, arr, a);

    return 0;
}

2.Find the value in the given array. If found print "Yes" else "No"
#include <iostream>
using namespace std;

void linear(int n, int arr[], int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            cout << "Yes";
            return;
        }
    }
    cout << "No";
}

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int a;
    cin >> a;
    linear(n, arr, a);

    return 0;
}

3.Nandini asked her students to arrange a set of numbers in ascending order
#include<iostream>
using namespace std;
void bubble(int arr[],int n)
{
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
        if(arr[i] > arr[j])
        {
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        }
    }
}
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    bubble(arr,n);
    for(int i=0;i<n;i++)
    cout<<arr[i]<<" ";
}

4.Write a program to sort a list of elements using the insertion sort algorithm.
#include<iostream>
using namespace std;
void insert(int arr[],int n)
{
    for(int i=0;i<n;i++)
    {
        int key=arr[i];
        int j=i-1;
        for(;j>=0 && arr[j]>key;j--)
        {
            arr[j+1]=arr[j];
        }
        arr[j+1]=key;
    }
    
}
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    insert(arr,n);
    for(int i=0;i<n;i++)
    cout<<arr[i]<<" ";
}

5.Shyam is working on a set of employee records in order to  nd the senior people based upon their age
#include<iostream> 
using namespace std;
int main()
{
    int n,d,m,y;
    cin>>n;
    int ar[n];
    for(int i=0;i<n;i++){
        cin>>d>>m>>y;
        ar[i] = (y*10000) + (m*100) + (d);
    }
    for(int i=0;i<n-1;i++){
        int mini = i;
        for(int j=i+1;j<n;j++){
            if(ar[j]<ar[mini])
            mini = j;
        }
        if(mini!=i)
        swap(ar[i],ar[mini]);
    }
    for(int i=0;i<n;i++){
        cout<<ar[i]%100<<" ";
        ar[i]/=100;
        cout<<ar[i]%100<<" ";
        ar[i]/=100;
        cout<<ar[i]<<"\n";
    }
    
}

6.Sort the given numbers using the Heap Sort algorithm.
#include<iostream>
using namespace std;
int heap(int arr[],int n,int i)
{
    int l=i;
    int left=2*i+1;
    int right=2*i+2;
    if(left < n && arr[left] > arr[l]){
        l=left;
    }
    if(right < n && arr[right] > arr[l])
    {
        l=right;
    }
    if(l!=i)
    {
        swap(arr[i],arr[l]);
        heap(arr,n,l);
    }
}
int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    for(int i=(n/2)-1;i>=0;i--)
    {
        heap(arr,n,i);
    }
    for(int i=n-1;i>=0;i--)
    {
        swap(arr[i],arr[0]);
        heap(arr,i,0);
    }
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
}

7.Sort the given numbers using the Quick Sort algorithm
#include<iostream>
using namespace std;
int partition(int arr[],int low,int high)
{
    int pivot = arr[low];
    int i=low,j=high;
    while(i<=j){
        while(arr[i] <= pivot)
        i++;
        while(arr[j] > pivot)
        j--;
        if(i<j)
        swap(arr[i],arr[j]);
    }
    swap(arr[low],arr[j]);
    return j;
}
void quicksort(int arr[],int low,int high){
    if(low<=high){
        int j=partition(arr,low,high);
        quicksort(arr,low,j-1);
        quicksort(arr,j+1,high);
    }
}
int main()
{
    int n;cin>>n;
    int arr[n],i;
    for(i=0;i<n;i++)
    cin>>arr[i];
    
    quicksort(arr,0,n-1);
    
    for(i=0;i<n;i++)
    cout<<arr[i]<<" ";
}

8.Write a program to implement merge sort algorithm.
#include<iostream>
using namespace std;
void merge(int arr[],int low,int mid,int high){
    int i=low,j=mid+1,k=low,s=high;
    int m[s];
    while(i <= mid && j<= high){
        if(arr[i]<arr[j])
            m[k++] = arr[i++];
        else
            m[k++] = arr[j++];
    }
    while(i<=mid)
        m[k++] = arr[i++];
    while(j<=high)
        m[k++] = arr[j++];
        
    for(i=low;i<=high;i++)
        arr[i] = m[i];
}
int msort(int arr[],int low,int high){
    if(low<high){
        int mid=(low+high)/2;
        msort(arr,low,mid);
        msort(arr,mid+1,high);
        
        merge(arr,low,mid,high);
    }
}
int main()
{
    int n;cin>>n;
    int arr[n],i;
    for(i=0;i<n;i++)
        cin>>arr[i];
    
    msort(arr,0,n-1);
    
    for(i=0;i<n;i++)
        cout<<arr[i]<<" ";
}

9.Write a program to schedule maximum number of matches
#include<iostream>
using namespace std;
struct dem
{
    string n;
    int m;
    int o;
};
int main()
{
    int n;
    cin>>n;
    struct dem arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i].n>>arr[i].m>>arr[i].o;
    }
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(arr[i].o > arr[j].o)
            {
                swap(arr[i],arr[j]);
            }
        }
    }
    int temp=0;
    cout<<"Selected Activities are: "<<"\n"<<arr[0].n<<" ";
    for(int i=1;i<n;i++)
    {
        if(arr[i].m >= arr[temp].o)
        {
            cout<<arr[i].n<<" ";
            temp=i;
        }
    }
    return 0;
}

10.Knapsack problem
#include<iostream>
#include<iomanip>
using namespace std;
struct knap{
    float w;
    float p;
    float pr;
};
int main()
{
    int n,c;
    cin>>n;
    struct knap arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i].w>>arr[i].p;
        arr[i].pr=(arr[i].p/arr[i].w);
    }
    cin>>c;
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(arr[i].pr < arr[j].pr)
            {
                swap(arr[i],arr[j]);
            }
        }
    }
    float max=0;
    cout<<"Maximum profit is:- ";
    for(int i=0;i<n;i++)
    {
        if(c>=arr[i].w)
        {
           c-=arr[i].w;
           max+=(arr[i].pr * arr[i].w);
        }
        else
        {
            max+=(c * arr[i].pr);
            break;
        }
    }
    cout<<fixed<<setprecision(2)<<max;
}

11.Find the occurrence of SubString in the main String.
#include <iostream>
#include <string>
using namespace std;

void naive(const string& txt, const string& pat) {
    int yes = 0;
    for (int i = 0; i < txt.length(); i++) {
        int count = 0;
        int k = i;
        for (int j = 0; j < pat.length(); j++) {
            if (txt[k] == pat[j]) {
                count++;
                k++;
            }
            if (count == pat.length()) {
                cout << "Found at " << i << endl;
                yes++;
            }
        }
    }
    if (yes == 0) {
        cout << "Not Found" << endl;
    }
}

int main() {
    string txt, pat;
    getline(cin, txt);
    getline(cin, pat);
    naive(txt, pat);

    return 0;
}


12.Find the occurrence of SubString in the main String using KMP Algorithm.
#include <iostream>
#include <string>
using namespace std;

void naive(const string& txt, const string& pat) {
    int yes = 0;
    for (int i = 0; i < txt.length(); i++) {
        int count = 0;
        int k = i;
        for (int j = 0; j < pat.length(); j++) {
            if (txt[k] == pat[j]) {
                count++;
                k++;
            }
            if (count == pat.length()) {
                cout << "Found at " << i << endl;
                yes++;
            }
        }
    }
    if (yes == 0) {
        cout << "Not Found" << endl;
    }
}

int main() {
    string txt, pat;
    getline(cin, txt);
    getline(cin, pat);
    naive(txt, pat);

    return 0;
}

13.Subset Sum Problem:
#include <iostream>
#include <vector>
using namespace std;

int countSubsetsWithSum(const vector<int>& set, int n, int K) {
    vector<vector<int>> dp(n + 1, vector<int>(K + 1, 0));

    for (int i = 0; i <= n; i++) {
        dp[i][0] = 1; 
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= K; j++) {
            if (set[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - set[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][K];
}

int main() {
    int n, K;
    cin >> n;

    vector<int> set(n);
    for (int i = 0; i < n; i++) {
        cin >> set[i];
    }

    cin >> K;

    int result = countSubsetsWithSum(set, n, K);
    cout << result << endl;

    return 0;
}

14.Rat in a Maze:
#include <bits/stdc++.h>
using namespace std;
int N;

bool isSafe(int **maze, int x, int y)
{
	if (x < N && y < N && maze[x][y] == 1)
		return true;
	return false;
}

bool solveMaze(int **maze, int x, int y, int **sol)
{
	if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
		sol[x][y] = 1;
		return true;
	}
	if (isSafe(maze, x, y) == true) {
		sol[x][y] = 1;
		if (solveMaze(maze, x + 1, y, sol) == true)
			return true;
		if (solveMaze(maze, x, y + 1, sol) == true)
			return true;
		sol[x][y] = 0;
	}
	return false;
}

int main()
{
    cin >> N;
    int *maze = new int[N];
    for(int i = 0; i < N; i ++)
        maze[i] = new int[N];
		
    for(int i = 0; i < N; i ++){
        for(int j = 0; j < N; j ++){
            cin >> maze[i][j];
        }
    }
	int *sol = new int[N];
	for(int i = 0; i < N; i ++)
	    sol[i] = new int[N];
	if (solveMaze(maze, 0, 0, sol) == false) {
		cout<<"Solution doesn't exist";
		return 0;
	}
	
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++)
			cout<<sol[i][j]<<" ";
		cout<<endl;
	}
	
	return 0;
}

15.Longest Common Subsequence(LCS)
#include<iostream>
#include<algorithm>
using namespace std;
int max(int a,int b)
{
    if(a>b)
    {
        return a;
    }
    return b;
}
int main()
{
    string x,y;
    cin>>x>>y;
    int n=x.length();
    int m=y.length();
    int a[n+1][m+1];
    int maxi=0;
    for(int i=0;i<n+1;i++)
    {
        for(int j=0;j<m+1;j++)
        {
            if(i==0 || j==0)
            {
                a[i][j]=0;
            }
            else if(y[j-1]==x[i-1])
            {
                a[i][j]=a[i-1][j-1]+1;
                if(a[i][j]>maxi)
                {
                    maxi=a[i][j];
                }
            }
            else
            {
                a[i][j]=max(a[i-1][j],a[i][j-1]);
            }
        }
    }
    cout<<maxi;
}

16.Levenshtein Distance
#include<iostream>
using namespace std;
int min(int a,int b,int c)
{
    if(a<b && a<c)
    {
        return a;
    }
    else if(b<c)
    {
        return b;
    }
    return c;
}
int kpo(char a,char b)
{
    if(a==b)
    {
        return 0;
    }
    return 1;
}
int main()
{
    string x,y;
    cin>>x>>y;
    int m=x.length();
    int n=y.length();
    int a[m+1][n+1];
    for(int i=0;i<=m;i++)
    {
        for(int j=0;j<=n;j++)
        {
            if(i==0)
            {
                a[i][j]=j;
            }
            else if(j==0)
            {
                a[i][j]=i;
            }
            else
            {
                a[i][j]=min((a[i-1][j-1]+kpo(y[j-1],x[i-1])),a[i-1][j]+1,a[i][j-1]+1);
            }
        }
    }
    cout<<a[m][n];
}

17.Segment Tree Range Minimum Query
#include<iostream>
#include<cmath>
using namespace std;
int cr(int a[],int *st,int x,int y,int i)
{
    if(x==y)
    {
        return a[x];
    }
    int mid=(x+y)/2;
    st[i]=min(cr(a,st,x,mid,2*i+1),cr(a,st,mid+1,y,2*i+2));
}
int *create(int a[],int x,int b)
{
    int n=b-x+1;
    int y=(int)(ceil(log2(n)));
    int ma=2*(int)pow(2,y)-1;
    int *st=new int[ma];
    cr(a,st,x,b,0);
    return st;
}
int main()
{
    int n;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    int x,y;
    cin>>x>>y;
    int *st=create(a,x,y);
    cout<<"Minimum of values in range ["<<x<<", "<<y<<"] is = "<<st[0];
}

18.Range Minimum Query Using Sparse Table
#include<iostream>
#include<cmath>
using namespace std;
#define kp 100
int main()
{
    int a[kp][kp];
    int n;
    cin>>n;
    int m[n];
    for(int i=0;i<n;i++)
    {
        cin>>m[i];
    }
    for(int i=0;i<n;i++)
    {
        a[i][0]=m[i];
    }
    for(int j=1;(1<<j)<=n;j++)
    {
        for(int i=0;(i+(1<<j)-1)<n;i++)
        {
            if(a[i][j-1]<a[i+(1<<(j-1))][j-1])
            {
                a[i][j]=a[i][j-1];
            }
            else
            {
                a[i][j]=a[i+(1<<(j-1))][j-1];
            }
        }
    }
    int l,r;
    cin>>l>>r;
    int j=(int)log2(r-l+1);
    if(a[l][j]<=a[r-(1<<j)+1][j])
    {
        cout<<a[l][j];
    }
    else
    {
        cout<<a[r+(1<<j)+1][j];
    }
}

19.Floyd Warshall Algorithm
#include<iostream>
using namespace std;
int main()
{
    int n;
    cin>>n;
    int a[n][n];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            a[i][j]=0;;
        }
    }
    int v,x,y,z;
    cin>>v;
    for(int i=0;i<v;i++)
    {
        cin>>x>>y>>z;
        a[x][y]=z;
        a[y][x]=z;
    }
    cout<<"Original matrix"<<endl;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(i!=j&&a[i][j]==0)
            {
                a[i][j]=999;
                cout<<"INF"<<" ";
                
            }
            else
            {
                cout<<a[i][j]<<" ";
            }
        }
        cout<<endl;
    }
    cout<<"Shortest path matrix"<<endl;
    for(int k=0;k<n;k++)
    {
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(a[i][j]>a[i][k]+a[k][j])
                {
                    a[i][j]=a[i][k]+a[k][j];
                }
            }
        }
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}

20.Prim's Algorithm
#include<iostream>
using namespace std;
#define m 100
void print(int p[],int n,int a[m][m])
{
    for(int i=1;i<n;i++)
    {
        cout<<p[i]<<" "<<i<<" "<<a[i][p[i]]<<endl;
    }
}
int minl(int a[m][m],bool ta[],int mi[],int n)
{
    int mt=1000,in;
    for(int i=0;i<n;i++)
    {
        if(!ta[i]&&mi[i]<mt)
        {       
            mt=mi[i];
            in=i;
        }
    }
    return in;
}
void prims(int a[m][m],int n)
{
    int pa[n],mi[n];
    bool ta[n];
    for(int i=0;i<n;i++)
    {
        mi[i]=999;ta[i]==false;
    }
    mi[0]=0;
    pa[0]=-1;
    for(int cou=0;cou<n-1;cou++)
    {
        int u=minl(a,ta,mi,n);
        ta[u]=true;
        for(int i=0;i<n;i++)
        {
            if(!ta[i]&&a[u][i]&&a[u][i]<mi[i])
            {
                pa[i]=u;
                mi[i]=a[u][i];
            }
        }
    }
    print(pa,n,a);
}
int main()
{
    int n;
    cin>>n;
    int a[m][m];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>a[i][j];
        }
    }
    prims(a,n);
}

21.Dijkstra's algorithm
#include<iostream>
using namespace std;
#define n 5
void print(int min[])
{
    cout<<"Vertex"<<"\t\t\t"<<"Distance from Source"<<endl;
    for(int i=0;i<n;i++)
    {
        cout<<i<<"\t\t\t"<<min[i]<<endl;
    }
}
int mi(int a[n][n],int c,int min[],bool ta[])
{
    int m=1000,in;
    for(int i=0;i<n;i++)
    {
        if(!ta[i]&&min[i]<= m)
        {
            m=min[i];
            in =i;
        }
    }
    return in;
}
void dij(int a[n][n],int s)
{
    int min[n];
    bool ta[n];
    for(int i=0;i<n;i++)
    {
        min[i]=999;
        ta[i]=0;
    }
    min[s]=0;
    for(int cou=0;cou<n-1;cou++)
    {
        int u=mi(a,cou,min,ta);
        ta[u]=true;
        for(int i=0;i<n;i++)
        {
            if(a[u][i]&&!ta[i]&&min[u]!=999&&min[u]+a[u][i]<min[i])
            {
                min[i]=min[u]+a[u][i];
            }
        }
    }
    print(min);
}
int main()
{
    int a[n][n];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>a[i][j];
        }
    }
    int s;
    cin>>s;
    dij(a,s);
}

22.Kruskal's Algorithm

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct Edge {
    int src, dest, weight;
};

bool compareEdges(Edge a, Edge b) {
    return a.weight < b.weight;
}

class Graph {
public:
    int V, E;
    vector<Edge> edges;

    Graph(int v, int e) : V(v), E(e) {
        edges.resize(E);
    }

    void addEdge(int src, int dest, int weight) {
        edges.push_back({src, dest, weight});
    }

    void kruskalMST() {
        vector<Edge> result;
        vector<int> parent(V);

        for (int i = 0; i < V; i++) {
            parent[i] = i;
        }

        sort(edges.begin(), edges.end(), compareEdges);

        for (Edge edge : edges) {
            int rootSrc = find(parent, edge.src);
            int rootDest = find(parent, edge.dest);

            if (rootSrc != rootDest) {
                result.push_back(edge);
                unionSets(parent, rootSrc, rootDest);
            }
        }

        int minimumCost = 0;
        cout << "Following are the edges in the constructed MST" << endl;
        for (Edge edge : result) {
            cout << edge.src << " -- " << edge.dest << " == " << edge.weight << endl;
            minimumCost += edge.weight;
        }
        cout << "Minimum Cost Spanning Tree: " << minimumCost << endl;
    }

private:
    int find(vector<int>& parent, int node) {
        if (parent[node] == node)
            return node;
        return find(parent, parent[node]);
    }

    void unionSets(vector<int>& parent, int root1, int root2) {
        parent[root1] = root2;
    }
};

int main() {
    int V, E;
    cin >> V >> E;

    Graph graph(V, E);

    for (int i = 0; i < E; i++) {
        int src, dest, weight;
        cin >> src >> dest >> weight;
        graph.addEdge(src, dest, weight);
    }

    graph.kruskalMST();

    return 0;
}