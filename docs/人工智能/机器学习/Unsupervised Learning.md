## K-Means Algorithm

Input:

- K(number of clusters)
- Trainning set $\{x^{(1)},x^{(2)},...,x^{(m)}\}$

$x^{(i)}\in R^n$ (drop $x_0=1$ convention)

Randomly intialize K cluster centroids $\mu_1,\mu_2,...,\mu_k \in R^n$

Repeat{

for $i=1 \mbox{ to m}$
$c^{(i)}:=\mbox{index (from 1 to K) if cluster centroid closet to } x^{(i)}$
for $k=1 \mbox{ to K}$
$\mu_k:=\mbox{average (mean) of points assigned to cluster}$
}

**Optimization objective:**

$$J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_k)=\frac1m\sum\limits_{i=1}^m||x^{(i)}-\mu_{c^{(i)}}||^2$$

$$\min\limits_{c^{(1)},...,c^{(m)},\mu_1,...,\mu_k}J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_k)$$

 

**Random initializaiton**

Should have $K<m$

Randomly pick K training examples.

Set $\mu_1,...,\mu_k$ equal to these $K$ examples.

## Princapal Component Analysis(PCA)

PCA is not linear regression

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109052029567.png)

### Summary 

Reduce data from $n$-dimensions to $k$-dimensions

- After mean normalization (ensure every feature has zero mean) and optionally feature scaling:
- Compute "convariance matrix"
$Sigma = \frac1m\sum\limits_{i=1}m(x^{(i)})(x^{(i)})^T$
- Compute "eigenvectors" of matrix $Sigma$$[U,S,V]=svd(Sigma);$
- $Ureduce = U(\mbox{ }:\mbox{ } ,1:k);$
- $z = Ureduce'*x;$

$Ureduce = U(\mbox{ }:\mbox{ } ,1:k)$ means get the first k cols of the matrix U


### Reconstruction from compressed representation

$z=U_{reduce}^Tx$

$x_{approx}^{(i)}=U_{reduce}\cdot z^{(i)}$

$U_{reduce}$ is a matrix which is $R^{n*k}$

$z^{(i)}$ is a matrix which is $R^{k*1}$

so $x_{approx}^{(i)}$ is a matrix which is $R^{n*1}$

### Choosing (number of principal components)

Average squared projec1on error:

$$\frac1m\sum\limits_{i=1}^m||x^{(i)}-x_{approx}^{(i)}||^2$$

Total varia1on in the data:

$$\frac1m\sum\limits_{i=1}^m||x^{(i)}||^2$$

Typically, choose $k$ to be smallest value so that

$$\frac{\frac1m\sum\limits_{i=1}^m||x^{(i)}-x_{approx}^{(i)}||^2}{\frac1m\sum\limits_{i=1}^m||x^{(i)}||^2}\leq0.01$$
 
the value of the equation above $<=0.01$ means **“99% of variance is retained”**

#### Algorithm:

- Try PCA with $k=1$
- Compute $U_{reduce},z^{(1)},z^{(2)},...,z^{(m)},x_{approx}^{(1)},...,x_{approx}^{(m)}$
- Check if
$$\frac{\frac1m\sum\limits_{i=1}^m||x^{(i)}-x_{approx}^{(i)}||^2}{\frac1m\sum\limits_{i=1}^m||x^{(i)}||^2}\leq0.01$$

 $[U,S,V] = svd(Sigma)$
 $$S = \begin{bmatrix}S_{11}&0&0&0&0\\0&S_{22}&0&0&0\\0&0&S_{33}&0&0\\0&0&0&\ddots&0\\0&0&0&0&S_{nn}\\\end{bmatrix}$$
Pick smallest value of $k$ for which

$$\frac{\sum\limits_{i=1}^kS_{ii}}{\sum\limits_{i=1}^nS_{ii}}\geq0.99$$

That means (99% of variance retained)

> So, to summarize, it is a good use of PCA, if your main motivation is to speed up your learning algorithm, **but using  PCA to prevent over-fitting, that is not a good use of PCA,** and **using regularization instead is really what many people would recommend doing instead**.

The following are good / recommended applications of PCA.

- To compress the data so it takes up less computer memory / disk space
- To reduce the dimension of the input data so as to speed up a learning algorithm
- To visualize high-dimensional data (by choosing $k = 2$ or $k = 3$)

>  Before implementing PCA, first try running whatever you want to do with the original/raw data $x^{(i)}$. Only if that doesn’t do what you want, then implement PCA and consider using $z^{(i)}$.

## Gaussian Distribution

Say $x \in R.$ If $x$ is distributed Gaussian with mean $\mu$, variance $\sigma^2$, standard deviation $\sigma$.
$$p(x;\mu,\sigma)=\frac1{\sqrt{2\pi}\sigma}exp(-\frac{(x-\mu)^2}{2\sigma^2})$$

$$\mu=\frac1m\sum\limits_{i=1}^mx^{(i)}$$

$$\sigma^2=\frac1m\sum\limits_{i=1}^m(x^{(i)}-\mu)^2$$

Density estimation

Training set: $\{x^{(1)},...,x^{(m)}\}$

Each example is $x \in R^n$

$$p(x)=\prod\limits_{j=1}^np(x_j;\mu_j,\sigma_j^2)$$

Anomaly detection algorithm

1. Choose features $x_i$ that you think might be indicative of anomalous examples.
2. Fit parameters $\mu_1,...,\mu_n,\sigma_1^2,...,\sigma_n^2$
	$\mu_j=\frac1m\sum\limits_{i=1}^mx_j^{(i)}$
	$\sigma_j^2=\frac1m\sum\limits_{i=1}^m(x_j^{(i)}-\mu_j^2)$
3. Given new example $x$, compute $p(x)$:
$p(x)=\prod\limits_{j=1}^np(x_j;\mu_j,\sigma_j^2)=\prod\limits_{j=1}^n\frac1{\sqrt{2\pi}\sigma_j}exp(-\frac{(x_j-\mu_j)^2}{2\sigma_j^2})$

Anomaly if $p(x)<\epsilon$

 

## Anomaly detection vs. Supervised learning

### Anomaly detection

- Very small number of positive examples $(y=1)$ . (0-20 is common).  
- Large number of negative $(y=0)$ examples.
- Many different “types” of anomalies. Hard for any algorithm to learn from positive examples what the anomalies look like; 
- future anomalies may look nothing like any of the anomalous examples we’ve seen so far.

### Supervised learning

- Large number of positive and negative examples.
- Enough positive examples for algorithm to get a sense of what positive examples are like, future positive examples likely to be similar to ones in training set.

## Multivariate Gaussian  (Normal) Distribution

Parameters $\mu,\Sigma$

$$p(x;\mu,\Sigma)=\frac1{(2\pi)^{\frac n2}|\Sigma|^\frac12}exp(-\frac12(x-\mu)^T\Sigma^{-1}(x-\mu))$$

$$\mu=\frac1m\sum\limits_{i=1}^mx^{(i)}$$

Parameter fifng: 

Given training set $\{x^{(1)},x^{(2)},...,x^{(m)}\}$

$$\Sigma=\frac1m\sum\limits_{i=1}^m(x^{(i)}-\mu)(x^{(i)}-\mu)^T$$
 
### Anomaly detec-on with the mul-variate Gaussian

1. Fit parameters 

$\mu=\frac1m\sum\limits_{i=1}^mx^{(i)}$

$\Sigma=\frac1m\sum\limits_{i=1}^m(x^{(i)}-\mu)(x^{(i)}-\mu)^T$

2. Given new example $x$, compute $p(x)$:

$$p(x)=\frac1{(2\pi)^{\frac n2}|\Sigma|^\frac12}exp(-\frac12(x-\mu)^T\Sigma^{-1}(x-\mu))$$

Flag an anomaly if $p(x)<\epsilon$