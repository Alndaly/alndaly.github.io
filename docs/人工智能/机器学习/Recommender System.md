# e.g. modern problem of predicting movie ratings.

- $n_u=No.users$
- $n_m=No.movies$
- $r(i,j)=1$ if user $j$ has rated movie $i$
- $y^{(i,j)} =$ rating given by user $j$ to movie $i$ (defined on if $r(i,j)=1$)
- $\theta^{(j)}=$ parameter vector for user $j$
- $x^{(i)}=$ feature vector for user $i$
- $m^{(j)} = No.$ of movies rated by user $j$

## Content Based Recommendations

To learn $\theta^{(j)}$ (parameter for user $j$):
$$\min\limits_{\theta^{(j)}}\frac1{2m^{(j)}}\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2m^{(j)}}\sum\limits_{k=1}^n(\theta_k^{(j)})^2$$

To learn $\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}$ :

Because $m^{(j)}$ is a constant, so we can just ignore it in the **optimization algorithm**.

(**Optimization algorithm**)

$$\min\limits_{\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}}\frac12\sum\limits_{j=1}^{n_u}\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_u}\sum\limits_{k=1}^n(\theta_k^{(j)})^2$$

**Gradient descent update:**

$\theta_k^{(j)}:=\theta_k^{(j)}-\alpha\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})x_k^{(i)}\mbox{ ( for  }k=0)$

$\theta_k^{(j)}:=\theta_k^{(j)}-\alpha(\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})x_k^{(i)}+\lambda\theta_k^{(j)})\mbox{ ( for  }k\neq0)$

## Collaborative Filtering

Given $\theta^{(0)},...,\theta^{(n_u)}$, to learn $x^{(i)}$ :

$$\min\limits_{x^{(i)}}\frac12\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{k=1}^n(x_k^{(i)})^2$$

Given $\theta^{(0)},...,\theta^{(n_u)}$, to learn $x^{(i)},...,x^{(n_m)}$ :

$$\min\limits_{x^{(1)},x^{(2)},...,x^{(n_m)}}\frac12\sum\limits_{i=1}^{n_m}\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_m}\sum\limits_{k=1}^n(x_k^{(i)})^2$$

## Combination of both Content Based Recommendations and Collaborative Filtering

Given $x^{(1)},x^{(2)},...,x^{(n_m)}$, estimate $\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}$:

$$\min\limits_{\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}}\frac12\sum\limits_{j=1}^{n_u}\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_u}\sum\limits_{k=1}^n(\theta_k^{(j)})^2$$
Given $\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}$, estimate$x^{(1)},x^{(2)},...,x^{(n_m)}$:

Notes: Here should start from $\theta^{(1)}$ , because we want the algorithm to find the constant if indeed need! Besides, $\theta^{(i)} \in R^n$, $x^{(i)} \in R^n$.

$$\min\limits_{x^{(1)},x^{(2)},...,x^{(n_m)}}\frac12\sum\limits_{i=1}^{n_m}\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_m}\sum\limits_{k=1}^n(x_k^{(i)})^2$$

Minimizing and simultaneously:

$$J(x^{(1)},x^{(2)},...,x^{(n_m)},\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)})=\frac12\sum\limits_{(i,j):r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_m}\sum\limits_{k=1}^n(x_k^{(i)})^2+\frac{\lambda}{2}\sum\limits_{j=1}^{n_u}\sum\limits_{k=1}^n(\theta_k^{(j)})^2$$

### summarize

1. Initialize $x^{(1)},x^{(2)},...,x^{(n_m)},\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)}$ to small random values.
2. Minimize $J(x^{(1)},x^{(2)},...,x^{(n_m)},\theta^{(1)},\theta^{(2)},...,\theta^{(n_u)})$ using gradient descent (or an advanced optimization algorithm). E.g. for every $j=1,...,n_u,i=1,...,n_m$:

$$x_k^{(i)}:=x_k^{(i)}-\alpha(\sum\limits_{j:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})\theta_k^{(j)}-\lambda x_k^{(i)})$$

$$\theta_k^{(j)}:=\theta_k^{(j)}-\alpha(\sum\limits_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)}-y^{(i,j)})x_k^{(i)}-\lambda \theta_k^{(j)})$$

3. For a user with parameters and a movie with (learned) features $x$, predict a star rating of $\theta^Tx$.

### Finding related items

For each product $i$, we learn a feature vector $x^{(i)}\in R^n$.

How to find movies related to movie?

5 most similar movies to movie :

Find the 5 movies $j$ with the smallest $||x^{(i)}-x^{(j)}||$.